# ANEXO D – TABELA DE CRÉDITOS DE SERVIÇO (SLA)

## CONTRATO DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SUPORTE
### MMB LTDA × WHY CONSULTING LTDA

---

## 1. INTRODUÇÃO

Este Anexo define a tabela de créditos de serviço (descontos) a serem aplicados à mensalidade da CONTRATANTE em caso de descumprimento de Acordos de Nível de Serviço (SLAs) pela CONTRATADA.

---

## 2. CRÉDITOS POR DISPONIBILIDADE (UPTIME)

### 2.1 Tabela de Créditos de Uptime

Caso a CONTRATADA não atinja o uptime mínimo de 98,0% em um mês, a CONTRATANTE fará jus a créditos conforme tabela abaixo:

| Uptime Alcançado | Crédito sobre Mensalidade |
|------------------|--------------------------|
| 97,5% a 98,0% | -10% |
| 97,0% a 97,5% | -20% |
| 96,5% a 97,0% | -30% |
| 96,0% a 96,5% | -40% |
| < 96,0% | -50% |

### 2.2 Cálculo de Uptime

O uptime é calculado conforme fórmula:

```
Uptime (%) = (Tempo Total - Tempo de Indisponibilidade) / Tempo Total × 100
```

**Onde:**
- **Tempo Total:** 720 horas (30 dias × 24 horas) ou 744 horas (31 dias × 24 horas);
- **Tempo de Indisponibilidade:** Tempo em que o CRM não estava disponível (não respondendo a requisições);
- **Exclusões:** Janelas de manutenção programada, indisponibilidades causadas por terceiros ou CONTRATANTE.

### 2.3 Exemplo de Cálculo

**Cenário:** Mês de janeiro com 744 horas totais

- Indisponibilidade não programada: 10 horas
- Uptime = (744 - 10) / 744 × 100 = 98,66%
- Uptime alcançado: 98,66% (dentro da meta)
- Crédito: 0% (sem desconto)

**Cenário 2:** Mês de janeiro com 744 horas totais

- Indisponibilidade não programada: 30 horas
- Uptime = (744 - 30) / 744 × 100 = 95,97%
- Uptime alcançado: 95,97% (< 96,0%)
- Crédito: -50% (máximo desconto)

---

## 3. CRÉDITOS POR DESCUMPRIMENTO DE PRAZOS DE SOLUÇÃO

### 3.1 Tabela de Créditos por Severidade

Caso a CONTRATADA não atinja os prazos de solução conforme Cláusula 11.2 do Contrato Mestre, a CONTRATANTE fará jus a créditos conforme tabela abaixo:

#### **Severidade 1 (Crítica) – Prazo: 24 horas**

| Atraso | Crédito |
|-------|---------|
| 1-6 horas | -5% |
| 7-12 horas | -10% |
| 13-24 horas | -15% |
| > 24 horas | -20% |

#### **Severidade 2 (Alta) – Prazo: 48 horas**

| Atraso | Crédito |
|-------|---------|
| 1-12 horas | -3% |
| 13-24 horas | -5% |
| 25-48 horas | -10% |
| > 48 horas | -15% |

#### **Severidade 3 (Média) – Prazo: 10 dias úteis**

| Atraso | Crédito |
|-------|---------|
| 1-2 dias úteis | -2% |
| 3-5 dias úteis | -5% |
| 6-10 dias úteis | -10% |
| > 10 dias úteis | -15% |

#### **Severidade 4 (Baixa) – Prazo: 20 dias úteis**

| Atraso | Crédito |
|-------|---------|
| 1-5 dias úteis | -1% |
| 6-10 dias úteis | -2% |
| 11-20 dias úteis | -5% |
| > 20 dias úteis | -10% |

### 3.2 Cálculo de Créditos por Atraso

Os créditos por atraso são calculados **por ticket** e **cumulativos** ao longo do mês.

**Exemplo:**
- Ticket Sev.1 resolvido 15 horas após abertura (atraso de 15 horas): -15%
- Ticket Sev.2 resolvido 60 horas após abertura (atraso de 12 horas): -5%
- Ticket Sev.3 resolvido 15 dias úteis após abertura (atraso de 5 dias úteis): -5%
- Total de créditos: -25% (cumulativo)

---

## 4. CRÉDITOS POR FALHA DE RESPOSTA INICIAL

Caso a CONTRATADA não responda dentro do prazo de resposta inicial (Cláusula 11.2), a CONTRATANTE fará jus a créditos conforme tabela abaixo:

| Severidade | Prazo | Atraso | Crédito |
|-----------|-------|--------|---------|
| Sev.1 | 1h | 1-2h | -5% |
| Sev.1 | 1h | > 2h | -10% |
| Sev.2 | 4h | 1-4h | -3% |
| Sev.2 | 4h | > 4h | -5% |
| Sev.3 | 1 dia útil | 1-2 dias úteis | -2% |
| Sev.3 | 1 dia útil | > 2 dias úteis | -5% |
| Sev.4 | 2 dias úteis | 1-3 dias úteis | -1% |
| Sev.4 | 2 dias úteis | > 3 dias úteis | -2% |

---

## 5. CRÉDITOS CUMULATIVOS

Os créditos de uptime, atraso de solução e atraso de resposta são **cumulativos**, mas limitados a um máximo de **-50% da mensalidade**.

**Exemplo:**
- Crédito por uptime: -20%
- Crédito por atraso de solução: -25%
- Crédito por atraso de resposta: -10%
- Total: -55%, mas limitado a -50%
- Crédito final: -50%

---

## 6. APLICAÇÃO DE CRÉDITOS

### 6.1 Cálculo Automático

Os créditos são calculados automaticamente pela CONTRATADA ao final de cada mês, com base em:
- Dados de uptime (monitoramento);
- Registros de tickets (timestamps de abertura, resposta, solução);
- Relatório mensal de SLA.

### 6.2 Faturamento

Os créditos são aplicados automaticamente na fatura do mês seguinte:

**Exemplo:**
- Mensalidade: R$ 19.800,00
- Crédito: -30%
- Valor do crédito: R$ 5.940,00
- Fatura: R$ 19.800,00 - R$ 5.940,00 = R$ 13.860,00

### 6.3 Notificação

A CONTRATADA notificará a CONTRATANTE, junto com o relatório mensal de SLA, sobre:
- Uptime alcançado;
- Tickets com atraso;
- Créditos calculados;
- Valor de desconto na fatura.

### 6.4 Contestação

A CONTRATANTE poderá contestar o cálculo de créditos em até 5 dias úteis após recebimento do relatório. A CONTRATADA revisará a contestação e responderá em até 3 dias úteis.

---

## 7. LIMITAÇÕES E EXCLUSÕES

### 7.1 Créditos Não Substituem Indenização

Os créditos de serviço **não substituem** o direito de indenização por perdas e danos. A CONTRATANTE pode requerer indenização adicional por perdas causadas pelo descumprimento de SLA.

### 7.2 Exclusões de Uptime

O tempo de indisponibilidade **não é contabilizado** para cálculo de uptime nos seguintes casos:

- **Manutenção programada:** Conforme Cláusula 11.1 (máximo 4 horas por semana);
- **Indisponibilidade de terceiros:** Falha de provedor de nuvem, internet, APIs externas (comprovado tecnicamente);
- **Ações da CONTRATANTE:** Configurações incorretas, ataques DDoS, consumo excessivo de recursos;
- **Força maior:** Desastres naturais, guerras, pandemias, atos governamentais.

### 7.3 Exclusões de Prazos

Os prazos de resposta e solução **não são contabilizados** nos seguintes casos:

- **Aguardando informação da CONTRATANTE:** Credenciais, acesso, dados necessários;
- **Problema de terceiro:** Indisponibilidade de API externa, banco de dados, etc.;
- **Problema causado por CONTRATANTE:** Configuração incorreta, dados corrompidos, etc.;
- **Força maior:** Conforme definição acima.

---

## 8. CRÉDITOS MÍNIMOS E MÁXIMOS

### 8.1 Crédito Mínimo

Não há crédito mínimo. Se uptime for ≥ 98,0% e todos os prazos forem atendidos, não há desconto.

### 8.2 Crédito Máximo

O crédito máximo é limitado a **-50% da mensalidade**, independentemente de quantos SLAs sejam descumpridos.

**Exemplo:**
- Uptime: 90% (desconto: -50%)
- Atraso de solução: -30%
- Atraso de resposta: -20%
- Total: -100%, mas limitado a -50%
- Crédito final: -50%

---

## 9. CRÉDITOS NÃO REEMBOLSÁVEIS

Os créditos de serviço **não são reembolsáveis** em dinheiro. São aplicados apenas como desconto na fatura do mês seguinte.

Se a CONTRATANTE cancelar o Contrato, créditos não utilizados **não serão reembolsados**.

---

## 10. RELATÓRIO MENSAL DE SLA

### 10.1 Conteúdo do Relatório

A CONTRATADA enviará, até o 5º dia útil de cada mês, relatório detalhado contendo:

**Seção 1: Disponibilidade**
- Uptime alcançado (%);
- Tempo total do mês (horas);
- Tempo de indisponibilidade (horas);
- Incidentes de indisponibilidade (data, hora, duração, causa);
- Manutenção programada realizada (data, hora, duração);
- Crédito de uptime (%).

**Seção 2: Tickets**
- Total de tickets abertos;
- Tickets por severidade (Sev.1, Sev.2, Sev.3, Sev.4);
- Tickets resolvidos no prazo;
- Tickets com atraso;
- Tempo médio de resposta por severidade;
- Tempo médio de solução por severidade;
- Crédito por atraso de solução (%).

**Seção 3: Resposta Inicial**
- Tickets respondidos no prazo;
- Tickets com atraso de resposta;
- Tempo médio de resposta inicial;
- Crédito por atraso de resposta (%).

**Seção 4: Resumo**
- Crédito total (cumulativo);
- Crédito máximo aplicado (-50%);
- Valor de desconto na fatura;
- Gráficos de tendência (uptime, tickets, resposta).

### 10.2 Formato do Relatório

O relatório será enviado em:
- Formato PDF (para leitura);
- Formato Excel (para análise);
- Acesso a dashboard online (em tempo real).

### 10.3 Assinatura do Relatório

O relatório será assinado por representante autorizado da CONTRATADA, certificando a precisão dos dados.

---

## 11. EXEMPLO COMPLETO DE CÁLCULO

### Cenário: Mês de Janeiro

**Dados:**
- Dias no mês: 31 (744 horas)
- Mensalidade: R$ 19.800,00
- Uptime alcançado: 96,8%
- Tickets abertos: 25
  - Sev.1: 2 (1 no prazo, 1 com 20h atraso)
  - Sev.2: 5 (4 no prazo, 1 com 12h atraso)
  - Sev.3: 10 (todos no prazo)
  - Sev.4: 8 (todos no prazo)
- Resposta inicial: 24 tickets respondidos no prazo, 1 com 3h atraso (Sev.1)

**Cálculos:**

1. **Crédito por Uptime:**
   - Uptime: 96,8% (entre 96,5% e 97,0%)
   - Crédito: -30%

2. **Crédito por Atraso de Solução:**
   - Ticket Sev.1 com 20h atraso: -15%
   - Ticket Sev.2 com 12h atraso: -5%
   - Total: -20%

3. **Crédito por Atraso de Resposta:**
   - Ticket Sev.1 com 3h atraso: -10%
   - Total: -10%

4. **Crédito Total:**
   - -30% + -20% + -10% = -60%
   - Limitado a -50%
   - Crédito final: -50%

5. **Valor de Desconto:**
   - R$ 19.800,00 × 50% = R$ 9.900,00

6. **Fatura de Fevereiro:**
   - Mensalidade: R$ 19.800,00
   - Crédito: -R$ 9.900,00
   - Fatura: R$ 9.900,00

---

## 12. REVISÃO E ATUALIZAÇÃO

Esta tabela de créditos pode ser revisada e atualizada por acordo mútuo entre as Partes, formalizando-se por Change Order ou aditivo ao Contrato.

---

**Aprovação:**

**CONTRATANTE:** _____________________________ Data: _____/_____/_____

**CONTRATADA:** _____________________________ Data: _____/_____/_____

---

**FIM DO ANEXO D**
