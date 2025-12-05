# ANEXO B – ESPECIFICAÇÕES DE INTEGRAÇÕES E INTEROPERABILIDADE

## CONTRATO DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SUPORTE
### MMB LTDA × WHY CONSULTING LTDA

---

## 1. INTRODUÇÃO

Este Anexo detalha as especificações técnicas, requisitos funcionais e SLAs para todas as integrações do CRM com sistemas de terceiros e com a Plataforma Unique (SaaS).

---

## 2. INTEGRAÇÃO COM INFOCAR/INFOVIST

### 2.1 Contexto e Objetivo

A Infocar é plataforma de inteligência de dados veiculares que fornece informações sobre histórico de sinistros, procedência de veículos, roubo/furto e dados técnicos de veículos. A integração com Infovist (sistema de vistoria da Infocar) permite captura de dados de vistoria com validação automática.

### 2.2 Funcionalidades de Integração

#### 2.2.1 Consulta de Dados de Veículo

**Objetivo:** Obter dados técnicos e histórico de sinistros de um veículo.

**Fluxo:**
1. Usuário insere placa ou chassi do veículo no CRM;
2. CRM consulta API da Infocar com placa/chassi;
3. Infocar retorna dados: marca, modelo, ano, cor, valor FIPE, histórico de sinistros;
4. CRM exibe dados no formulário de cotação.

**Requisitos Técnicos:**
- Endpoint: `https://api.infocar.com.br/v1/vehicle/search`
- Método: POST
- Autenticação: API Key (fornecida por Infocar)
- Timeout: 5 segundos
- Retry: 3 tentativas em caso de falha
- Cache: 24 horas (dados não mudam frequentemente)
- Fallback: Permitir entrada manual de dados se API indisponível

**Exemplo de Requisição:**
```json
{
  "plate": "ABC1234",
  "chassi": "9BWDE21F562000001"
}
```

**Exemplo de Resposta:**
```json
{
  "success": true,
  "data": {
    "plate": "ABC1234",
    "chassi": "9BWDE21F562000001",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "color": "Prata",
    "fipe_value": 85000,
    "accident_count": 1,
    "last_accident": "2023-06-15",
    "theft_status": "clean"
  }
}
```

#### 2.2.2 Validação de Procedência

**Objetivo:** Verificar se veículo é roubado/furtado ou possui procedência duvidosa.

**Fluxo:**
1. Após vistoria, CRM consulta API de procedência com placa/chassi;
2. Infocar retorna status: "clean", "stolen", "suspicious", "blocked";
3. Se status não for "clean", alerta é disparado para mesa de análise.

**Requisitos Técnicos:**
- Endpoint: `https://api.infocar.com.br/v1/vehicle/theft-status`
- Método: POST
- Timeout: 5 segundos
- Consulta obrigatória antes de aprovação de sinistro

#### 2.2.3 Integração com Infovist (Vistoria)

**Objetivo:** Capturar dados de vistoria com validação automática de chassi/motor.

**Fluxo:**
1. Vistoriador acessa Infovist no mobile;
2. Realiza vistoria (fotos, checklist, validação de chassi/motor);
3. Infovist sincroniza dados com CRM via webhook;
4. CRM recebe dados de vistoria e armazena.

**Requisitos Técnicos:**
- Integração via API REST ou webhook;
- Autenticação: OAuth 2.0 ou API Key;
- Dados sincronizados: fotos, checklist, validação, GPS;
- Latência máxima: 5 minutos;
- Webhook URL: `https://crm.empresa.com.br/api/v1/inspection/webhook`

**Estrutura de Dados de Vistoria:**
```json
{
  "inspection_id": "INS-20240101-001",
  "vehicle_plate": "ABC1234",
  "vehicle_chassi": "9BWDE21F562000001",
  "inspection_date": "2024-01-01T10:30:00Z",
  "inspector_name": "João Silva",
  "inspector_id": "INS-001",
  "location": {
    "latitude": -15.7975,
    "longitude": -47.8919
  },
  "photos": [
    {
      "url": "https://storage.infocar.com.br/photos/INS-20240101-001-01.jpg",
      "timestamp": "2024-01-01T10:30:00Z",
      "type": "front"
    }
  ],
  "checklist": {
    "tires": "OK",
    "windows": "OK",
    "bodywork": "Minor damage",
    "engine": "OK"
  },
  "validation": {
    "chassi_valid": true,
    "motor_valid": true,
    "theft_status": "clean"
  },
  "status": "completed"
}
```

### 2.3 SLA de Integração Infocar/Infovist

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 98% |
| Tempo de resposta | ≤ 2 segundos (p95) |
| Latência de sincronização | ≤ 5 minutos |
| Retry automático | Sim (3 tentativas) |
| Escalação de falha | Sim (após 3 falhas) |

### 2.4 Tratamento de Falhas

- **Falha de API:** Exibir mensagem ao usuário e permitir entrada manual;
- **Timeout:** Retry automático após 30 segundos;
- **Indisponibilidade prolongada:** Notificar CONTRATANTE e CONTRATADA;
- **Dados inconsistentes:** Validação de integridade e alerta.

---

## 3. INTEGRAÇÃO COM EZCHAT

### 3.1 Contexto e Objetivo

EZchat é plataforma de chat e comunicação em tempo real. A integração permite atendimento ao cliente via chat integrado ao CRM.

### 3.2 Funcionalidades de Integração

#### 3.2.1 Chat em Tempo Real

**Objetivo:** Permitir chat entre cliente e agente de atendimento.

**Fluxo:**
1. Cliente acessa chat no portal ou website;
2. Mensagem é roteada para agente disponível;
3. Agente responde via CRM (chat integrado);
4. Histórico de conversa é armazenado no CRM.

**Requisitos Técnicos:**
- Integração via WebSocket ou API REST;
- Autenticação: OAuth 2.0;
- Roteamento automático de mensagens;
- Suporte a múltiplos agentes simultâneos;
- Notificações em tempo real;
- Histórico de conversa persistido.

#### 3.2.2 Contexto do Cliente

**Objetivo:** Exibir contexto do cliente (dados, histórico) durante chat.

**Fluxo:**
1. Agente recebe mensagem de cliente;
2. CRM busca dados do cliente (nome, conta, histórico);
3. Contexto é exibido no painel do agente;
4. Agente pode acessar dados de conta, apólice, sinistros.

**Requisitos Técnicos:**
- Sincronização de dados de cliente em tempo real;
- Busca rápida de cliente (< 1 segundo);
- Exibição de histórico de interações;
- Integração com base de dados do CRM.

#### 3.2.3 Roteamento Inteligente

**Objetivo:** Rotear mensagens para agente mais apropriado.

**Fluxo:**
1. Mensagem chega ao CRM;
2. CRM classifica tipo de mensagem (dúvida, reclamação, sinistro, etc.);
3. CRM roteia para fila apropriada (vendas, suporte, sinistros);
4. Agente disponível na fila recebe mensagem.

**Requisitos Técnicos:**
- Classificação automática de mensagem (NLP);
- Filas por tipo de atendimento;
- Priorização por severidade;
- Balanceamento de carga entre agentes.

### 3.3 SLA de Integração EZchat

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 98% |
| Tempo de resposta | ≤ 500 ms |
| Latência de entrega | ≤ 1 segundo |
| Suporte a usuários simultâneos | ≥ 100 |

---

## 4. INTEGRAÇÃO COM CÍLIA

### 4.1 Contexto e Objetivo

Cília é sistema de gestão de sinistros utilizado por seguradoras. A integração permite registro e acompanhamento de sinistros.

### 4.2 Funcionalidades de Integração

#### 4.2.1 Registro de Sinistro

**Objetivo:** Registrar sinistro no sistema Cília.

**Fluxo:**
1. Cliente abre aviso de sinistro no CRM;
2. CRM envia dados de sinistro para Cília via API;
3. Cília registra sinistro e retorna número de protocolo;
4. CRM armazena número de protocolo e sincroniza.

**Requisitos Técnicos:**
- Endpoint: `https://api.cilia.com.br/v1/claims/create`
- Método: POST
- Autenticação: Certificado digital (X.509);
- Timeout: 10 segundos;
- Retry: 3 tentativas;
- Confirmação de recebimento obrigatória.

**Exemplo de Requisição:**
```json
{
  "claim_number": "SIN-20240101-001",
  "claim_date": "2024-01-01T10:30:00Z",
  "claim_type": "collision",
  "vehicle_plate": "ABC1234",
  "vehicle_chassi": "9BWDE21F562000001",
  "customer_name": "João Silva",
  "customer_cpf": "12345678900",
  "accident_location": "Av. Paulista, 1000, São Paulo, SP",
  "accident_description": "Colisão frontal com outro veículo",
  "police_report": "BO-12345678",
  "estimated_damage": 15000.00,
  "third_party": {
    "name": "Maria Santos",
    "cpf": "98765432100",
    "vehicle": "XYZ5678"
  }
}
```

**Exemplo de Resposta:**
```json
{
  "success": true,
  "claim_id": "CLI-20240101-001",
  "protocol_number": "2024010100001",
  "status": "registered",
  "created_at": "2024-01-01T10:31:00Z"
}
```

#### 4.2.2 Consulta de Sinistro

**Objetivo:** Consultar status e detalhes de sinistro em Cília.

**Fluxo:**
1. Agente consulta sinistro no CRM;
2. CRM consulta API de Cília com número de protocolo;
3. Cília retorna dados atualizados de sinistro;
4. CRM exibe dados ao agente.

**Requisitos Técnicos:**
- Endpoint: `https://api.cilia.com.br/v1/claims/query`
- Método: GET
- Timeout: 5 segundos;
- Cache: 1 hora (dados não mudam frequentemente);
- Fallback: Exibir dados em cache se API indisponível.

#### 4.2.3 Atualização de Status

**Objetivo:** Atualizar status de sinistro em Cília.

**Fluxo:**
1. Agente atualiza status no CRM (ex.: "em análise", "aprovado", "pago");
2. CRM envia atualização para Cília;
3. Cília confirma atualização;
4. CRM sincroniza status.

**Requisitos Técnicos:**
- Endpoint: `https://api.cilia.com.br/v1/claims/update`
- Método: PUT
- Timeout: 10 segundos;
- Confirmação de recebimento obrigatória.

### 4.3 SLA de Integração Cília

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 98% |
| Tempo de resposta | ≤ 2 segundos (p95) |
| Latência de sincronização | ≤ 10 minutos |
| Retry automático | Sim (3 tentativas) |

---

## 5. INTEGRAÇÃO COM APIs DE SEGURADORAS PARCEIRAS

### 5.1 Contexto e Objetivo

Integração com APIs de seguradoras parceiras para obtenção de taxas, envio de propostas e recebimento de apólices.

### 5.2 Funcionalidades de Integração

#### 5.2.1 Consulta de Taxas

**Objetivo:** Obter taxa de prêmio da seguradora para cálculo de cotação.

**Fluxo:**
1. Cotador solicita taxa para veículo específico;
2. CRM consulta API da seguradora com dados do veículo;
3. Seguradora retorna taxa;
4. CRM calcula prêmio e exibe ao cliente.

**Requisitos Técnicos:**
- Integração customizada por seguradora;
- Autenticação: API Key ou OAuth;
- Timeout: 5 segundos;
- Cache: 24 horas;
- Fallback: Taxa padrão se API indisponível.

#### 5.2.2 Envio de Proposta

**Objetivo:** Enviar proposta de seguro para subscrição pela seguradora.

**Fluxo:**
1. Cliente aceita proposta no CRM;
2. CRM envia proposta para API da seguradora;
3. Seguradora subscreve proposta;
4. CRM recebe confirmação e número de apólice.

**Requisitos Técnicos:**
- Integração customizada por seguradora;
- Envio de dados completos (cliente, veículo, cobertura);
- Confirmação de recebimento obrigatória;
- Armazenamento de número de apólice.

#### 5.2.3 Recebimento de Apólice

**Objetivo:** Receber apólice emitida pela seguradora.

**Fluxo:**
1. Seguradora emite apólice;
2. Seguradora envia apólice para CRM via API ou webhook;
3. CRM armazena apólice e associa ao cliente;
4. Cliente recebe apólice por email.

**Requisitos Técnicos:**
- Webhook para recebimento de apólice;
- Armazenamento de PDF de apólice;
- Notificação ao cliente;
- Sincronização de dados de apólice.

### 5.3 SLA de Integração com Seguradoras

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 95% (pode variar por seguradora) |
| Tempo de resposta | ≤ 5 segundos |
| Latência de sincronização | ≤ 30 minutos |
| Suporte | Conforme SLA de cada seguradora |

---

## 6. INTEGRAÇÃO COM GATEWAYS DE PAGAMENTO

### 6.1 Contexto e Objetivo

Integração com gateways de pagamento para processamento de pagamento de prêmio.

### 6.2 Funcionalidades de Integração

#### 6.2.1 Processamento de Pagamento

**Objetivo:** Processar pagamento de prêmio via múltiplos meios.

**Fluxo:**
1. Cliente seleciona meio de pagamento (cartão, boleto, PIX, transferência);
2. CRM envia dados de pagamento para gateway;
3. Gateway processa pagamento;
4. Gateway retorna confirmação ou erro;
5. CRM atualiza status de pagamento.

**Requisitos Técnicos:**
- Integração com Stripe, PagSeguro, Mercado Pago ou equivalente;
- Suporte a múltiplos meios: cartão de crédito, boleto, PIX, transferência;
- Conformidade com PCI DSS (não armazenar dados de cartão);
- Timeout: 30 segundos;
- Retry automático em caso de falha temporária;
- Webhook para confirmação de pagamento.

**Exemplo de Requisição (Stripe):**
```json
{
  "amount": 50000,
  "currency": "brl",
  "payment_method": "card",
  "payment_method_details": {
    "card": {
      "number": "4242424242424242",
      "exp_month": 12,
      "exp_year": 2025,
      "cvc": "123"
    }
  },
  "confirm": true,
  "return_url": "https://crm.empresa.com.br/payment/confirm"
}
```

#### 6.2.2 Confirmação de Pagamento

**Objetivo:** Receber confirmação de pagamento via webhook.

**Fluxo:**
1. Gateway processa pagamento;
2. Gateway envia webhook para CRM com confirmação;
3. CRM atualiza status de pagamento;
4. CRM ativa apólice;
5. Cliente recebe confirmação por email.

**Requisitos Técnicos:**
- Webhook URL: `https://crm.empresa.com.br/api/v1/payments/webhook`
- Assinatura de webhook para segurança;
- Retry automático se CRM não responder;
- Idempotência (mesma confirmação não processa 2x).

**Exemplo de Webhook:**
```json
{
  "event": "payment.success",
  "payment_id": "pay_20240101001",
  "amount": 50000,
  "currency": "brl",
  "status": "completed",
  "timestamp": "2024-01-01T10:35:00Z",
  "metadata": {
    "order_id": "ORD-20240101-001",
    "customer_id": "CUST-001"
  }
}
```

#### 6.2.3 Reembolso

**Objetivo:** Processar reembolso em caso de cancelamento.

**Fluxo:**
1. Cliente cancela apólice;
2. CRM calcula valor de reembolso;
3. CRM envia requisição de reembolso para gateway;
4. Gateway processa reembolso;
5. Cliente recebe reembolso em conta.

**Requisitos Técnicos:**
- Suporte a reembolso total e parcial;
- Processamento em até 5 dias úteis;
- Confirmação de reembolso via webhook;
- Auditoria completa de reembolsos.

### 6.3 SLA de Integração com Gateways

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 99,5% |
| Tempo de resposta | ≤ 2 segundos |
| Taxa de sucesso | ≥ 99,5% |
| Conformidade PCI DSS | Sim |

---

## 7. INTEGRAÇÃO COM PLATAFORMA UNIQUE (SaaS)

### 7.1 Contexto e Objetivo

Integração com Plataforma Unique para sincronização de dados e operação de módulos SaaS (financeiro, orçamentário, chamados internos).

### 7.2 Funcionalidades de Integração

#### 7.2.1 Sincronização de Dados de Cliente

**Objetivo:** Sincronizar dados de cliente entre CRM e Unique.

**Fluxo:**
1. Cliente é criado/atualizado no CRM;
2. CRM envia dados para Unique via API;
3. Unique armazena dados;
4. Dados são sincronizados em tempo quase real.

**Requisitos Técnicos:**
- Endpoint: `https://api.unique.com.br/v1/customers`
- Método: POST (criar) / PUT (atualizar);
- Autenticação: OAuth 2.0;
- Timeout: 5 segundos;
- Retry: 3 tentativas;
- Latência máxima: 5 minutos.

**Estrutura de Dados:**
```json
{
  "customer_id": "CUST-001",
  "name": "João Silva",
  "cpf": "12345678900",
  "email": "joao@email.com",
  "phone": "11999999999",
  "address": {
    "street": "Rua A",
    "number": "123",
    "city": "São Paulo",
    "state": "SP",
    "zip": "01000000"
  },
  "created_at": "2024-01-01T10:00:00Z",
  "updated_at": "2024-01-01T10:00:00Z"
}
```

#### 7.2.2 Integração de Módulo Financeiro

**Objetivo:** Sincronizar dados de contas a pagar/receber entre CRM e Unique.

**Fluxo:**
1. Fatura é gerada no CRM;
2. CRM envia fatura para Unique;
3. Unique registra fatura em contas a receber;
4. Pagamento é registrado em Unique;
5. CRM recebe confirmação de pagamento.

**Requisitos Técnicos:**
- Sincronização bidirecional;
- Suporte a múltiplas moedas;
- Reconciliação automática;
- Auditoria de transações.

#### 7.2.3 Change Data Capture (CDC)

**Objetivo:** Replicar dados de Unique para Data Warehouse da CONTRATANTE.

**Fluxo:**
1. Dados são alterados em Unique;
2. Unique captura alterações (INSERT/UPDATE/DELETE);
3. Unique envia alterações para CRM via webhook;
4. CRM replica dados para DW;
5. CONTRATANTE acessa dados em DW para BI.

**Requisitos Técnicos:**
- Webhook para notificação de alterações;
- Latência máxima: 5 minutos;
- Suporte a replicação completa e incremental;
- Formato de dados: JSON ou SQL;
- Armazenamento em S3, GCS ou equivalente.

### 7.3 SLA de Integração Unique

| Métrica | Valor |
|---------|-------|
| Disponibilidade | ≥ 98% |
| Tempo de resposta | ≤ 1 segundo |
| Latência de sincronização | ≤ 5 minutos |
| Uptime de Unique | ≥ 98% |
| Suporte | Conforme Cláusula 11 do Contrato |

---

## 8. TABELA RESUMIDA DE INTEGRAÇÕES

| Integração | Tipo | Protocolo | Autenticação | SLA Disponibilidade |
|-----------|------|-----------|--------------|-------------------|
| Infocar/Infovist | REST API | HTTPS | API Key | ≥ 98% |
| EZchat | WebSocket/REST | HTTPS | OAuth 2.0 | ≥ 98% |
| Cília | SOAP/REST | HTTPS | Certificado Digital | ≥ 98% |
| Seguradoras | REST API | HTTPS | API Key/OAuth | ≥ 95% |
| Gateways Pagamento | REST API | HTTPS | API Key | ≥ 99,5% |
| Unique | REST API | HTTPS | OAuth 2.0 | ≥ 98% |

---

## 9. TRATAMENTO DE FALHAS E FALLBACKS

### 9.1 Estratégia de Retry

- **Falha temporária (timeout, erro 5xx):** Retry automático após 30 segundos, máximo 3 tentativas;
- **Falha permanente (erro 4xx):** Notificar usuário e permitir ação manual;
- **Indisponibilidade prolongada:** Escalar para CONTRATADA e CONTRATANTE.

### 9.2 Fallbacks

- **Infocar indisponível:** Permitir entrada manual de dados;
- **Cília indisponível:** Armazenar sinistro localmente e sincronizar quando disponível;
- **Gateway de pagamento indisponível:** Oferecer alternativa de pagamento;
- **Unique indisponível:** Continuar operação do CRM, sincronizar quando disponível.

### 9.3 Monitoramento e Alertas

- **Monitoramento contínuo** de status de integrações;
- **Alertas automáticos** em caso de falha;
- **Dashboards** com status de integrações;
- **Relatórios** de disponibilidade e performance.

---

## 10. SEGURANÇA DE INTEGRAÇÕES

### 10.1 Autenticação

- Utilizar OAuth 2.0 ou API Key com rotação periódica;
- Armazenar credenciais em cofre de segredos (AWS Secrets Manager, etc.);
- Nunca armazenar credenciais em código ou repositório.

### 10.2 Criptografia

- Todas as comunicações via HTTPS (TLS 1.2+);
- Dados sensíveis criptografados em repouso;
- Certificados SSL válidos e atualizados.

### 10.3 Validação de Dados

- Validar estrutura de dados recebidos;
- Validar assinatura de webhooks;
- Rejeitar dados malformados ou suspeitos.

### 10.4 Auditoria

- Registrar todas as chamadas de API (logs);
- Incluir timestamp, usuário, dados enviados/recebidos;
- Retenção mínima de 1 ano;
- Conformidade com LGPD.

---

## 11. RESPONSABILIDADES

### 11.1 Responsabilidades da CONTRATADA

- Implementar todas as integrações conforme especificações;
- Garantir SLA de disponibilidade e performance;
- Monitorar saúde das integrações;
- Notificar CONTRATANTE em caso de falha;
- Corrigir bugs e problemas de integração;
- Manter documentação atualizada;
- Suporte técnico para troubleshooting.

### 11.2 Responsabilidades da CONTRATANTE

- Fornecer credenciais de APIs de terceiros;
- Fornecer documentação de APIs de terceiros;
- Validar funcionamento de integrações;
- Comunicar alterações em APIs de terceiros;
- Fornecer ambiente de teste.

### 11.3 Responsabilidades de Terceiros

- Manter disponibilidade de APIs conforme SLA próprio;
- Notificar alterações em APIs;
- Suporte técnico para problemas de API;
- Conformidade com segurança e LGPD.

---

## 12. TERMOS E CONDIÇÕES

### 12.1 Propriedade Intelectual

Conforme Cláusula 4 do Contrato Mestre.

### 12.2 Confidencialidade

Conforme Cláusula 19 do Contrato Mestre.

### 12.3 Limitações de Responsabilidade

A CONTRATADA não é responsável por falhas causadas exclusivamente por indisponibilidade ou mudanças abruptas em APIs de terceiros, desde que comprove tecnicamente que a falha é externa.

---

**Aprovação:**

**CONTRATANTE:** _____________________________ Data: _____/_____/_____

**CONTRATADA:** _____________________________ Data: _____/_____/_____

---

**FIM DO ANEXO B**
