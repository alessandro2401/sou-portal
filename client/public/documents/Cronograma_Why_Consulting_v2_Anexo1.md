# Cronograma Macro de Entregáveis - Contrato Why Consulting v2

**Documento:** Anexo 1 - Cronograma Macro de Entregáveis  
**Versão do Contrato:** 2.0  
**Data:** 08 de dezembro de 2025  
**Prazo Total:** 12 meses (365 dias corridos)  
**Modelo:** Levantamento → Desenvolvimento → Testes → Go-live

---

## Visão Executiva

O presente cronograma estabelece o plano macro de entregas para o desenvolvimento do CRM customizado e implantação da Plataforma Unique, conforme previsto no Contrato de Prestação de Serviços entre MMB LTDA e WHY CONSULTING LTDA. O projeto está estruturado em **5 grandes fases** distribuídas ao longo de 12 meses, com marcos de validação e critérios de aceite claramente definidos.

### Investimento Total
- **CRM Customizado:** R$ 261.000,00 (desenvolvimento completo)
- **Plataforma Unique (SaaS):** Licenciamento mensal conforme tabela do contrato

### Premissas Críticas
1. Início imediato após assinatura do contrato
2. Disponibilidade de stakeholders para entrevistas e validações
3. Acesso a sistemas legados (SGA, CRM atual) para mapeamento AS-IS
4. Credenciais de APIs de terceiros (Infocar, Cilia, EZChat, FIPE) fornecidas até o Dia 30
5. Ambiente de homologação disponibilizado pela CONTRATANTE até o Dia 60

---

## Fase 1: Plataforma Unique (Dia 0 ao Dia 65)

A Plataforma Unique é uma solução SaaS proprietária da WHY CONSULTING que será implantada em paralelo ao desenvolvimento do CRM customizado. Esta fase estabelece a fundação tecnológica para os módulos financeiros e de gestão interna.

### Entregas Principais

#### 1.1 Sistema Orçamentário
Módulo para controle e acompanhamento de orçamentos corporativos, com funcionalidades de planejamento, aprovação de despesas e relatórios gerenciais. Permite visibilidade em tempo real do consumo orçamentário por centro de custo.

#### 1.2 Sistema de Chamados Internos
Plataforma de Service Desk para gestão de solicitações internas entre departamentos, com SLA configurável, fila de atendimento e histórico de interações. Integra-se ao módulo de BI para análise de performance operacional.

#### 1.3 Módulo Financeiro - Contas a Pagar
Automatização do fluxo de contas a pagar, incluindo lançamento de títulos, aprovação de pagamentos, integração bancária para geração de remessas e conciliação de baixas. Suporta múltiplas formas de pagamento (boleto, PIX, TED, cheque).

### Critérios de Aceite
- Usuários cadastrados e permissões configuradas
- Workflows de aprovação funcionando
- Integração bancária validada com transações de teste
- Treinamento da equipe financeira concluído

### Observações Importantes
⚠️ **Dependência de Código-Fonte:** A Plataforma Unique é proprietária da WHY CONSULTING. A CONTRATANTE não terá acesso ao código-fonte, apenas licença de uso. Avaliar impacto de lock-in tecnológico antes da assinatura.

---

## Fase 2: Definições e Arquitetura do CRM (Dia 0 ao Dia 65)

Fase crítica de levantamento de requisitos, modelagem de processos e definição da arquitetura técnica. Executa em paralelo à implantação da Plataforma Unique, garantindo alinhamento estratégico entre as soluções.

### 2.1 Kickoff do Projeto

Reunião inaugural com presença obrigatória de stakeholders-chave de todas as áreas impactadas (Comercial, Vendas, Operações, Pós-Vendas, TI, Jurídico, Financeiro). Estabelecimento de canais de comunicação, definição de responsáveis por área e apresentação do cronograma detalhado.

**Entregas:**
- Plano de comunicação do projeto (frequência de reuniões, canais, escalação)
- Matriz RACI (Responsible, Accountable, Consulted, Informed) por área
- Cronograma detalhado com marcos de validação

### 2.2 Levantamento Funcional Completo

Imersão nas operações atuais através de entrevistas estruturadas com usuários-chave, observação de processos em execução e análise de sistemas legados. Mapeamento de fluxos AS-IS (estado atual) e TO-BE (estado desejado) para identificar gaps e oportunidades de automação.

**Entregas:**
- Relatório de entrevistas com áreas Comercial, Vendas, Operações, Pós-Vendas e TI
- Documentação de fluxos atuais do SGA e CRM legado
- Mapa AS-IS detalhado (processos atuais com pontos de dor identificados)
- Mapa TO-BE proposto (processos otimizados com automações)
- Catálogo de integrações necessárias

### 2.3 Arquitetura de Sistema e Banco de Dados

Definição da arquitetura técnica do CRM, incluindo escolha de tecnologias, padrões de desenvolvimento, modelo de dados e estratégia de integrações. Estabelecimento de diretrizes de segurança, performance e escalabilidade.

**Entregas:**
- Documento de arquitetura geral (frontend, backend, banco de dados, infraestrutura)
- Diagrama de componentes e camadas da aplicação
- Modelo de banco de dados relacional (MER - Modelo Entidade-Relacionamento)
- Definição de credenciais e endpoints de APIs de terceiros:
  - **Infocar:** Consulta de dados veiculares
  - **Cilia:** Gestão de sinistros
  - **EZChat:** Comunicação com clientes via WhatsApp
  - **FIPE:** Cotação de valores de veículos
- Plano de segurança da informação (criptografia, controle de acesso, auditoria)

### 2.4 Documento de Escopo Consolidado

Formalização de todos os requisitos levantados em documento único, servindo como baseline para o desenvolvimento. Este documento será a referência para validação de entregas e resolução de divergências.

**Entregas:**
- Requisitos funcionais detalhados por módulo
- Requisitos não-funcionais:
  - **SLA:** Tempo de resposta, disponibilidade, tempo de resolução de incidentes
  - **Segurança:** Autenticação, autorização, criptografia, logs de auditoria
  - **LGPD:** Consentimento, portabilidade, anonimização, direito ao esquecimento
  - **Performance:** Tempo de carregamento de telas, capacidade de usuários simultâneos
- Regras de negócio detalhadas (cálculos, validações, fluxos de aprovação)
- Versão assinada digitalmente com aceite formal da CONTRATANTE

### Marcos de Validação
- **Dia 30:** Apresentação do mapa AS-IS para validação
- **Dia 50:** Apresentação da arquitetura técnica e modelo de dados
- **Dia 65:** Assinatura do Documento de Escopo Consolidado (marco crítico - desenvolvimento não inicia sem este aceite)

---

## Fase 3: Desenvolvimento do CRM - Módulos Principais (Dia 65 ao Dia 320)

Fase de construção dos módulos core do CRM, executada de forma incremental com entregas parciais para validação contínua. Cada módulo possui entregáveis específicos e critérios de aceite objetivos.

### 3.1 Módulo Comercial - Aquisição e Vendas (Dia 65 ao Dia 170)

Módulo responsável por toda a jornada de aquisição de novos associados, desde a prospecção até a ativação da proteção veicular. Integra-se com seguradoras, sistemas de cotação e plataformas de comunicação.

**Entregáveis:**

**Pipeline de Vendas Completo**  
Gestão visual do funil de vendas com etapas configuráveis: Prospecção → Adesão → Vistoria → Ativação. Permite arrastar e soltar leads entre etapas, definir probabilidade de conversão e prever receita futura.

**Cadastro de Linhas de Produtos**  
Catálogo de produtos e serviços oferecidos pela administradora, com regras de elegibilidade, faixas de cobertura, franquias e tabelas de preços. Suporta múltiplos planos (básico, intermediário, premium) e add-ons (assistência 24h, carro reserva, proteção de vidros).

**Distribuição Automática de Leads**  
Motor de roteamento inteligente que distribui leads entre corretores com base em critérios configuráveis: região geográfica, tipo de veículo, carga de trabalho atual, histórico de conversão. Evita sobrecarga e garante equidade na distribuição.

**Cotação Multicálculo (FIPE + Regras de Participação)**  
Sistema de cotação que consulta a tabela FIPE em tempo real, aplica regras de participação obrigatória (PO) e calcula o valor da mensalidade considerando perfil do condutor, histórico de sinistros e características do veículo.

**Gerador Automático de Proposta (PDF / Link)**  
Criação instantânea de propostas comerciais personalizadas em formato PDF ou link compartilhável via WhatsApp. Proposta inclui dados do veículo, coberturas contratadas, valores, condições de pagamento e termos de aceite.

**Termos de Aceite pelo Cliente**  
Assinatura digital de contratos e termos de adesão diretamente na plataforma, com validade jurídica e armazenamento seguro. Integra-se com serviços de certificação digital (ICP-Brasil ou equivalente).

**Gestão de Metas e Comissionamento**  
Acompanhamento de metas individuais e por equipe, cálculo automático de comissões com base em regras parametrizáveis (percentual sobre venda, bônus por meta atingida, penalidades por cancelamento precoce).

**Integração com Seguradoras**  
Conexão via API com seguradoras parceiras para envio automático de dados de cotação, emissão de apólices e recebimento de confirmações. Reduz retrabalho manual e erros de digitação.

**Módulo Financeiro - Contas a Receber (Plataforma Unique)**  
Gestão de recebíveis vinculados a contratos de proteção veicular, incluindo emissão de boletos, cobrança via PIX, baixa automática de pagamentos e régua de cobrança para inadimplentes.

**Integração com Bancos para Geração de Boletos**  
Emissão de boletos bancários via API com principais instituições financeiras (Banco do Brasil, Itaú, Bradesco, Santander, Caixa). Suporta registro online e baixa automática via arquivo de retorno.

**Integração com EZChat (WhatsApp Business)**  
Envio automatizado de mensagens via WhatsApp para clientes em diferentes etapas do funil: confirmação de recebimento de proposta, lembretes de vistoria, notificações de pagamento, boas-vindas pós-ativação.

**Régua de Relacionamento**  
Automação de comunicações baseadas em gatilhos temporais ou comportamentais: aniversário do cliente, renovação de contrato, ausência de interação por 30 dias, feedback pós-atendimento.

**Critérios de Aceite:**
- Testes de fluxo ponta a ponta realizados com sucesso (lead → proposta → vistoria → ativação)
- Propostas geradas contendo dados reais de clientes e veículos
- Integrações FIPE retornando valores atualizados
- Comissões calculadas corretamente conforme regras parametrizadas
- Boletos emitidos e baixados automaticamente

---

### 3.2 Módulo de Vistoria Prévia - Integração Infocar e Infovist (Dia 65 ao Dia 170)

Módulo crítico para mitigação de riscos de fraude e avaliação do estado real do veículo antes da ativação da proteção. Integra-se com plataformas especializadas de vistoria veicular.

**Entregáveis:**

**Checklists Obrigatórios**  
Roteiros de vistoria padronizados por tipo de veículo (carro, moto, caminhão), com itens de verificação obrigatórios: lataria, vidros, pneus, motor, documentação, equipamentos de segurança. Vistoriador não pode avançar sem preencher todos os campos.

**Captura de Fotos (Análise Completa)**  
Aplicativo mobile para vistoriadores capturarem fotos de múltiplos ângulos do veículo, com geolocalização e timestamp. Fotos são enviadas automaticamente para análise por IA que identifica avarias pré-existentes.

**Validação Automática de Chassi e Motor**  
Verificação cruzada de números de chassi e motor com bases de dados oficiais (DENATRAN, Polícia Civil) para detectar adulterações, veículos clonados ou com restrições judiciais.

**Integração Infovist/Infocar**  
Conexão com plataformas especializadas que fornecem histórico completo do veículo: acidentes anteriores, recalls, multas, débitos de IPVA/licenciamento, leilões, sinistros em outras seguradoras.

**Mesa de Análise com Workflow (Aprovar/Reprovar)**  
Interface para analistas revisarem vistorias concluídas, visualizarem fotos, consultarem histórico do veículo e tomarem decisão final: aprovar (libera ativação), reprovar (bloqueia contrato) ou solicitar nova vistoria.

**Critérios de Aceite:**
- Imagens armazenadas com segurança e acessíveis via interface web
- Integração com serviços externos (Infocar/Infovist) retornando dados em tempo real
- Aprovações e reprovações gerando notificações automáticas para corretor e cliente
- Trilha de auditoria completa (quem aprovou, quando, com base em quais critérios)

---

### 3.3 Módulo CRM 360 - Gestão de Carteira (Dia 170 ao Dia 255)

Visão unificada e completa de cada associado, consolidando informações de múltiplos sistemas em uma única interface. Permite que atendentes e gestores tenham contexto completo antes de qualquer interação.

**Entregáveis:**

**Timeline Unificada do Associado (Visão 360)**  
Linha do tempo cronológica com todos os eventos relevantes do cliente: data de adesão, pagamentos realizados, sinistros abertos, chamados de suporte, renovações, upgrades de plano, interações via WhatsApp.

**Cadastro de Veículos, Condutores e Beneficiários**  
Gestão completa do núcleo familiar do associado, permitindo adicionar múltiplos veículos, condutores autorizados (com CNH digitalizada) e beneficiários em caso de sinistro com vítimas.

**Clube de Benefícios (Postos de Combustíveis)**  
Programa de fidelidade que oferece descontos em rede de postos de combustíveis parceiros. Associado acumula pontos a cada abastecimento e resgata descontos na mensalidade ou em serviços adicionais.

**Gestão de Status Ativo/Inativo**  
Controle do ciclo de vida do contrato: ativo (em dia), inadimplente (atraso até 30 dias), suspenso (atraso superior a 30 dias), cancelado (por solicitação ou inadimplência prolongada), renovado.

**Régua de Relacionamento**  
Automações de comunicação proativa baseadas no status do cliente: lembretes de renovação 60 dias antes do vencimento, ofertas de upgrade para clientes fiéis há mais de 2 anos, pesquisas de satisfação pós-atendimento.

**Critérios de Aceite:**
- Histórico do cliente consolidado e exibido em ordem cronológica
- Dados sincronizados em tempo real entre módulos (vendas, sinistros, financeiro, atendimento)
- Filtros e buscas avançadas funcionando (por CPF, placa, status, data de adesão)

---

### 3.4 Módulo de Sinistros - Eventos Realizados 100% pelo Cilia (Dia 170 ao Dia 255)

Gestão completa do ciclo de vida de sinistros, desde a abertura do aviso até a conclusão do reparo ou pagamento de indenização. Integra-se com a plataforma Cilia, especializada em gestão de sinistros veiculares.

**Entregáveis:**

**Abertura de Aviso de Sinistro via "Cecília" (Chatbot)**  
Assistente virtual que guia o associado no processo de abertura de sinistro via WhatsApp, solicitando informações essenciais: tipo de evento (colisão, roubo, incêndio), data/hora, local, fotos do veículo, boletim de ocorrência (BO).

**Integração com Cilia**  
Envio automático de dados do sinistro para a plataforma Cilia, que gerencia todo o workflow: acionamento de guincho, indicação de oficinas credenciadas, aprovação de orçamentos, acompanhamento de reparos.

**Acompanhamento de Reparo**  
Portal transparente onde o associado visualiza em tempo real o status do reparo: veículo em análise, orçamento aprovado, peças encomendadas, em reparo, pronto para retirada.

**Orçamentos e Oficinas**  
Rede de oficinas credenciadas com avaliação por clientes, especialização por marca/modelo, prazo médio de entrega. Sistema permite comparar até 3 orçamentos antes de aprovar o reparo.

**Fluxo de Indenização Integral**  
Processo automatizado para casos de perda total (PT) ou roubo sem recuperação: avaliação do valor de mercado, cálculo da indenização considerando participação obrigatória, emissão de documento de quitação.

**Critérios de Aceite:**
- Workflow completo do sinistro testado de ponta a ponta
- Integração Cilia validada com casos reais de sinistros
- Regras de negócio (PT/Roubo) funcionando conforme legislação e contrato
- Notificações automáticas em cada mudança de status

---

### 3.5 Módulo de Pós-Vendas & Sucesso do Cliente (Dia 255 ao Dia 320)

Foco em retenção, satisfação e upsell de clientes ativos. Centraliza canais de atendimento e monitora indicadores de saúde da carteira.

**Entregáveis:**

**Portal Central de Atendimento (SAC)**  
Interface unificada para abertura e acompanhamento de chamados de suporte: dúvidas sobre cobertura, solicitação de segunda via de boleto, alteração de dados cadastrais, reclamações, elogios.

**SLA por Tipo de Chamado**  
Definição de tempos máximos de resposta e resolução por categoria: urgente (2h), alta (8h), média (24h), baixa (48h). Sistema alerta gestores quando SLA está próximo de ser violado.

**Régua de Retenção**  
Identificação proativa de clientes em risco de cancelamento (inadimplência recorrente, múltiplas reclamações, ausência de renovação) e acionamento de ações de retenção: desconto especial, upgrade gratuito, contato de gerente de contas.

**Gestão de Churn**  
Dashboard com taxa de cancelamento mensal, motivos de cancelamento (preço, atendimento, sinistro negado), análise de coortes (clientes que cancelam após 3 meses vs. após 2 anos).

**Pesquisa NPS Integrada**  
Envio automático de pesquisa Net Promoter Score após interações-chave: conclusão de sinistro, renovação de contrato, atendimento de suporte. Resultados consolidados em dashboard gerencial.

**Critérios de Aceite:**
- Chamados sendo abertos e distribuídos automaticamente
- SLA sendo monitorado e alertas funcionando
- Pesquisas NPS enviadas e respostas coletadas
- Dashboard de churn atualizado em tempo real

---

### 3.6 Dashboards e Business Intelligence (Dia 255 ao Dia 320)

Camada de inteligência analítica que transforma dados operacionais em insights estratégicos para tomada de decisão.

**Entregáveis:**

**Dashboard de Vendas**  
Métricas de performance comercial: leads recebidos, taxa de conversão por etapa do funil, ticket médio, tempo médio de fechamento, ranking de corretores, projeção de receita.

**Dashboard de Sinistralidade**  
Análise de frequência e severidade de sinistros: quantidade de eventos por tipo, custo médio de reparo, tempo médio de conclusão, oficinas com maior custo, veículos com maior sinistralidade.

**Dashboard de Inadimplência**  
Monitoramento de recebíveis: taxa de inadimplência por faixa de atraso (0-30 dias, 31-60 dias, 60+ dias), valor total em atraso, efetividade de régua de cobrança, projeção de perdas.

**Dashboard Operacional**  
Indicadores de eficiência operacional: tempo médio de atendimento, taxa de resolução no primeiro contato, backlog de chamados, SLA cumprido vs. violado, satisfação do cliente (CSAT).

**Indicadores em Tempo Real**  
Painéis com atualização automática (refresh a cada 5 minutos) para acompanhamento de operações críticas: vendas do dia, sinistros abertos, chamados em fila, inadimplência acumulada.

**Critérios de Aceite:**
- Dados atualizados automaticamente sem necessidade de refresh manual
- Alta performance em consultas (carregamento de dashboards em menos de 3 segundos)
- Filtros dinâmicos funcionando (por período, região, produto, corretor)
- Exportação de relatórios em PDF e Excel

---

## Fase 4: Testes e Homologação (Dia 320 ao Dia 340)

Fase crítica de validação da qualidade e aderência do sistema aos requisitos. Execução de testes técnicos e funcionais em ambiente controlado antes da liberação para produção.

### 4.1 Testes Técnicos

**Testes Unitários**  
Validação de componentes individuais do código (funções, classes, métodos) para garantir que cada unidade funciona conforme especificado. Cobertura mínima de 80% do código.

**Testes Automatizados**  
Scripts de teste que executam automaticamente cenários de uso, validando fluxos completos sem intervenção manual. Executados a cada nova versão (CI/CD - Continuous Integration/Continuous Deployment).

**Testes de Carga e Performance**  
Simulação de alto volume de usuários simultâneos (stress test) para identificar gargalos de performance, vazamentos de memória e limites de escalabilidade. Validação de tempos de resposta sob carga.

**Testes de API**  
Validação de integrações com sistemas externos (Infocar, Cilia, EZChat, FIPE, bancos) para garantir que requisições e respostas estão conforme especificação técnica.

### 4.2 Testes Funcionais

**Cenários de Uso Validados com Usuários-Chave**  
Usuários reais (corretores, atendentes, analistas, gestores) executam tarefas do dia a dia no sistema em ambiente de homologação, reportando bugs, inconsistências e sugestões de melhoria.

**Testes do Fluxo Ponta a Ponta**  
Validação de jornadas completas: desde a prospecção de um lead até a ativação do contrato, desde a abertura de um sinistro até o pagamento da indenização.

**Teste Regressivo Após Correções**  
Reexecução de testes após correção de bugs para garantir que a correção não introduziu novos problemas (regressão).

### 4.3 Homologação e Aceite

**Rodada 1 de Ajustes (Dia 320 ao Dia 330)**  
Correção de bugs críticos e bloqueantes identificados nos testes funcionais. Priorização de issues que impedem o uso do sistema.

**Rodada 2 de Ajustes (Dia 330 ao Dia 340)**  
Correção de bugs médios e baixos, ajustes de usabilidade e refinamentos de interface. Validação final com usuários-chave.

**Aceite Formal (Dia 340)**  
Assinatura de Termo de Aceite pela CONTRATANTE, formalizando que o sistema atende aos requisitos do Documento de Escopo Consolidado. Marco crítico para liberação do Go-Live.

---

## Fase 5: Go-Live e Transição (Dia 340 ao Dia 365)

Fase final de preparação para entrada em produção, migração de dados históricos, treinamento de usuários e ativação do sistema para uso real.

### 5.1 Preparação para Go-Live (Dia 340 ao Dia 350)

**Migração de Dados Históricos**  
Extração de dados do sistema legado (SGA, CRM atual), transformação para o formato do novo CRM e carga no banco de dados de produção. Validação de integridade e consistência dos dados migrados.

**Treinamento de Usuários Finais**  
Capacitação de todos os usuários que utilizarão o sistema: corretores, atendentes, analistas de sinistros, gestores. Treinamento presencial ou remoto com material de apoio (manuais, vídeos).

**Documentação Técnica e Funcional**  
Entrega de manuais de usuário, guias de administração do sistema, documentação de APIs, diagramas de arquitetura e procedimentos operacionais padrão (POPs).

**Plano de Contingência**  
Definição de estratégias de rollback em caso de falha crítica no Go-Live: backup do sistema legado, procedimentos manuais temporários, canais de suporte emergencial.

### 5.2 Go-Live (Dia 350 ao Dia 357)

**Ativação em Produção (Dia 350)**  
Liberação do sistema para uso real, com monitoramento intensivo nas primeiras 48 horas. Equipe técnica em regime de plantão 24/7.

**Suporte Intensivo (Primeira Semana)**  
Presença de consultores da WHY CONSULTING nas instalações da CONTRATANTE para suporte presencial, resolução de dúvidas e ajustes emergenciais.

**Monitoramento 24/7**  
Acompanhamento contínuo de logs, performance, disponibilidade e erros. Alertas automáticos para incidentes críticos com acionamento imediato da equipe técnica.

### 5.3 Pós Go-Live (Dia 357 ao Dia 365)

**Ajustes Finos**  
Correção de pequenos bugs identificados em produção, ajustes de performance e otimizações de usabilidade com base no feedback dos usuários.

**Coleta de Feedback**  
Pesquisa estruturada com usuários para avaliar satisfação, identificar pontos de melhoria e priorizar evoluções futuras do sistema.

**Relatório de Lições Aprendidas**  
Documento consolidando aprendizados do projeto: o que funcionou bem, o que poderia ser melhorado, riscos que se materializaram, boas práticas identificadas. Serve como referência para projetos futuros.

---

## Resumo Executivo de Prazos

| Fase | Início | Término | Duração | Marco Crítico |
|------|--------|---------|---------|---------------|
| **Plataforma Unique** | Dia 0 | Dia 65 | 65 dias | Módulo Financeiro ativo |
| **Definições e Arquitetura** | Dia 0 | Dia 65 | 65 dias | Escopo Consolidado assinado |
| **Desenvolvimento - Comercial e Vistoria** | Dia 65 | Dia 170 | 105 dias | Primeiro contrato emitido pelo CRM |
| **Desenvolvimento - CRM 360 e Sinistros** | Dia 170 | Dia 255 | 85 dias | Primeiro sinistro processado |
| **Pós-Vendas e BI** | Dia 255 | Dia 320 | 65 dias | Dashboards operacionais |
| **Testes e Homologação** | Dia 320 | Dia 340 | 20 dias | Aceite formal assinado |
| **Go-Live e Transição** | Dia 340 | Dia 365 | 25 dias | Sistema em produção |

**Duração Total:** 365 dias corridos (12 meses)

---

## Dependências Críticas e Riscos

### Dependências da CONTRATANTE
1. **Fornecimento de credenciais de APIs** até o Dia 30 (Infocar, Cilia, EZChat, FIPE)
2. **Disponibilidade de stakeholders** para entrevistas e validações (mínimo 4h/semana por área)
3. **Ambiente de homologação** provisionado até o Dia 60
4. **Aprovação do Escopo Consolidado** até o Dia 65 (bloqueante para desenvolvimento)
5. **Participação em testes de homologação** entre Dia 320 e Dia 340

### Riscos Identificados
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Atraso na entrega de credenciais de APIs | Média | Alto | Buffer de 15 dias no cronograma |
| Indisponibilidade de stakeholders para entrevistas | Média | Médio | Agendamento antecipado com confirmação |
| Mudança de escopo após Dia 65 | Baixa | Crítico | Processo formal de Change Request |
| Falha em integrações com sistemas legados | Média | Alto | Testes de integração desde Dia 30 |
| Resistência de usuários ao novo sistema | Alta | Médio | Treinamento intensivo e suporte presencial |

---

## Observações Finais

Este cronograma foi elaborado com base nas informações fornecidas no Anexo 1 do Contrato de Prestação de Serviços entre MMB LTDA e WHY CONSULTING LTDA. Eventuais alterações de escopo, atrasos no fornecimento de insumos pela CONTRATANTE ou mudanças regulatórias podem impactar os prazos previstos, devendo ser formalizadas através de Termo Aditivo ao contrato.

**Recomendação:** Realizar reuniões de acompanhamento quinzenais com apresentação de status report detalhado, incluindo percentual de conclusão por fase, riscos identificados e ações de mitigação em andamento.

---

**Documento gerado em:** 08 de dezembro de 2025  
**Versão:** 1.0  
**Responsável:** Análise Jurídica e Técnica - Portal SOU
