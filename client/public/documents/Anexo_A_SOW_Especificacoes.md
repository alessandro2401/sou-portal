# ANEXO A – ESPECIFICAÇÕES TÉCNICAS E ESCOPO DE TRABALHO (SOW)

## CONTRATO DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SUPORTE
### MMB LTDA × WHY CONSULTING LTDA

---

## 1. INTRODUÇÃO E CONTEXTO

Este Anexo detalha as especificações técnicas, requisitos funcionais, requisitos não-funcionais e cronograma de desenvolvimento do sistema CRM a ser desenvolvido pela CONTRATADA para a CONTRATANTE.

O CRM será um sistema de Gestão de Relacionamento com Clientes integrado, desenvolvido sob encomenda, com foco em operações de seguros de automóvel, gestão de sinistros e relacionamento com associados/clientes.

---

## 2. ESCOPO FUNCIONAL DO CRM

### 2.1 Módulo Comercial (Aquisição e Vendas)

#### 2.1.1 Gestão de Leads e Funil de Vendas

**Funcionalidades:**
- Cadastro de leads com captura automática de origem (website, telefone, indicação, campanha);
- Visualização do funil de vendas em formato Kanban com status customizáveis;
- Distribuição automática de leads entre vendedores conforme regras configuráveis (round-robin, por especialidade, por carga);
- Acompanhamento de estágio do lead (Prospecção, Qualificação, Proposta, Negociação, Fechamento, Perda);
- Histórico completo de interações (emails, chamadas, reuniões, notas);
- Alertas automáticos para leads em risco de perda ou com inatividade prolongada;
- Relatórios de taxa de conversão por vendedor, origem e período.

**Requisitos Técnicos:**
- Drag-and-drop entre estágios do funil;
- Atualização em tempo real;
- Suporte a múltiplos usuários simultâneos;
- Filtros avançados por data, origem, valor, vendedor, etc.

#### 2.1.2 Cotador Inteligente (Multicálculo)

**Funcionalidades:**
- Integração com tabela FIPE para obtenção de valores de veículos em tempo real;
- Cálculo automático de prêmio com múltiplos critérios: valor do veículo, idade, uso, localização, perfil do condutor;
- Configuração de cotas de participação (percentuais de comissão por vendedor, gerente, diretor);
- Geração automática de propostas em formato PDF e Link compartilhável;
- Versionamento de propostas com histórico de alterações;
- Cálculo de desconto progressivo conforme regras de negócio;
- Integração com seguradoras parceiras para obtenção de taxas;
- Simulador de prêmio para cliente final (self-service).

**Requisitos Técnicos:**
- API de integração com FIPE (atualização diária);
- Cálculo em tempo real (< 2 segundos);
- Suporte a múltiplas moedas (se aplicável);
- Auditoria de todas as alterações de cálculo.

#### 2.1.3 Adesão Digital

**Funcionalidades:**
- Formulário de coleta de dados pessoais e veiculares;
- Upload de documentos (CNH, CRLV, comprovante de residência);
- Validação automática de documentos (OCR para CNH e CRLV);
- Assinatura eletrônica integrada (plataforma de assinatura digital);
- Armazenamento seguro de documentos com criptografia;
- Rastreamento de status de adesão (Iniciada, Pendente Documentos, Assinada, Concluída);
- Notificações automáticas para cliente e vendedor;
- Integração com sistema de pagamento para cobrança de prêmio.

**Requisitos Técnicos:**
- Compatibilidade com mobile (responsivo);
- Suporte a múltiplos formatos de documento (PDF, JPG, PNG);
- Limite de tamanho de arquivo: 10 MB por documento;
- Conformidade com LGPD e segurança de dados pessoais.

#### 2.1.4 Gestão de Metas e Comissionamento

**Funcionalidades:**
- Definição de metas por vendedor, gerente e período (mensal, trimestral, anual);
- Acompanhamento de progresso em tempo real (% de atingimento);
- Cálculo automático de comissão conforme tabela de comissionamento;
- Simulador de comissão (quanto falta para atingir meta);
- Relatórios de comissão por período com detalhamento de vendas;
- Aprovação de comissão por gestor;
- Integração com folha de pagamento (exportação de dados).

**Requisitos Técnicos:**
- Cálculo automático e auditável;
- Histórico de alterações de tabela de comissionamento;
- Suporte a múltiplas estruturas de comissão.

---

### 2.2 Módulo de Vistoria Prévia & Onboarding

#### 2.2.1 Agendamento de Vistorias

**Funcionalidades:**
- Agendamento integrado ao fluxo de venda (após proposta aceita);
- Calendário de disponibilidade de vistoriadores;
- Confirmação automática via SMS/email para cliente;
- Lembretes automáticos (24h e 2h antes da vistoria);
- Reagendamento por cliente ou vistoriador;
- Histórico de vistorias realizadas e canceladas;
- Integração com GPS para otimização de rotas de vistoriadores.

**Requisitos Técnicos:**
- Calendário com suporte a múltiplos vistoriadores;
- Notificações em tempo real;
- Suporte a timezone múltiplos.

#### 2.2.2 Integração com Sistema Infovist (Infocar)

**Funcionalidades:**
- Autenticação e conexão com API da Infocar/Infovist;
- Sincronização de dados de vistoria (checklist obrigatório);
- Captura de fotos com marca d'água automática (geolocalização, data, hora, vistoriador);
- Validação automática de chassi e motor (verificação de roubo/procedência);
- Checklist obrigatório de itens a verificar (pneus, vidros, lataria, motor, etc.);
- Armazenamento de evidências fotográficas;
- Geração de relatório de vistoria em PDF.

**Requisitos Técnicos:**
- API REST com autenticação OAuth;
- Suporte a upload de múltiplas fotos (até 50 por vistoria);
- Compressão automática de imagens;
- Armazenamento em cloud storage seguro.

#### 2.2.3 Mesa de Análise

**Funcionalidades:**
- Workflow de aprovação/reprovação de vistorias;
- Análise de risco baseada em dados da vistoria;
- Integração com bureaus de dados (Infocar, Infovist) para verificação de procedência;
- Consulta a base de dados de roubos/furtos;
- Motivos de reprovação customizáveis;
- Notificação automática ao cliente em caso de reprovação;
- Histórico de decisões e justificativas;
- Relatórios de taxa de aprovação/reprovação.

**Requisitos Técnicos:**
- Integração com APIs de bureaus de dados;
- Regras de negócio configuráveis;
- Auditoria completa de decisões.

---

### 2.3 Módulo de Gestão de Carteira (CRM 360)

#### 2.3.1 Visão Única do Associado

**Funcionalidades:**
- Perfil completo do associado/cliente com dados pessoais e veiculares;
- Timeline de interações (vendas, sinistros, atendimentos, comunicações);
- Histórico de apólices ativas e inativas;
- Saldo de benefícios e pontos (se aplicável);
- Documentos associados (CNH, CRLV, comprovante de residência);
- Contatos alternativos e preferências de comunicação;
- Score de risco/inadimplência;
- Segmentação automática (cliente VIP, em risco, inativo, etc.).

**Requisitos Técnicos:**
- Consolidação de dados de múltiplas fontes;
- Atualização em tempo real;
- Suporte a busca avançada e filtros.

#### 2.3.2 Gestão de Veículos

**Funcionalidades:**
- Cadastro de múltiplos veículos por associado;
- Dados do veículo (placa, chassi, motor, marca, modelo, ano, cor);
- Status do veículo (ativo, inativo, vendido, sinistrado);
- Histórico de apólices por veículo;
- Alertas de vencimento de documentação (licenciamento, inspeção);
- Gestão de condutores autorizados;
- Gestão de beneficiários (cônjuge, filhos, etc.);
- Histórico de sinistros por veículo.

**Requisitos Técnicos:**
- Validação de placa e chassi;
- Integração com FIPE para dados do veículo;
- Suporte a múltiplos tipos de veículo.

#### 2.3.3 Clube de Benefícios

**Funcionalidades:**
- Catálogo de benefícios (descontos, serviços, parcerias);
- Resgate de benefícios por cliente;
- Controle de saldo de pontos/créditos;
- Histórico de resgates;
- Notificações de benefícios disponíveis;
- Integração com parceiros (ex.: postos de combustível, oficinas).

**Requisitos Técnicos:**
- Integração com sistemas de parceiros;
- Controle de estoque de benefícios;
- Auditoria de resgates.

---

### 2.4 Módulo de Gestão de Eventos (Sinistros)

#### 2.4.1 Abertura de Aviso de Sinistro

**Funcionalidades:**
- Abertura de aviso de sinistro via web, mobile ou call center;
- Integração com sistema Cília para registro de sinistro;
- Coleta de informações do sinistro (data, hora, local, tipo, terceiros envolvidos);
- Upload de Boletim de Ocorrência (BO) e fotos do sinistro;
- Classificação automática de tipo de sinistro (colisão, roubo, furto, perda total, etc.);
- Geração de número de protocolo;
- Notificação automática ao cliente e gestor;
- Rastreamento de status do sinistro.

**Requisitos Técnicos:**
- Integração com API Cília;
- Suporte a upload de múltiplos documentos;
- Validação de BO (OCR);
- Disponibilidade 24/7.

#### 2.4.2 Acompanhamento de Reparo

**Funcionalidades:**
- Gestão de oficinas credenciadas;
- Solicitação de orçamento para reparo;
- Comparação de orçamentos;
- Aprovação de orçamento por gestor;
- Acompanhamento do progresso do reparo (status: aguardando peças, em reparo, pronto, entregue);
- Fotos do antes/durante/depois do reparo;
- Controle de custos (orçado vs. realizado);
- Histórico de reparos por veículo;
- Integração com sistema de oficina (se disponível).

**Requisitos Técnicos:**
- Integração com sistemas de oficinas parceiras;
- Notificações de mudança de status;
- Controle de documentos (notas fiscais, recibos).

#### 2.4.3 Fluxo de Indenização Integral

**Funcionalidades:**
- Avaliação de sinistro para indenização integral (perda total, roubo);
- Cálculo automático de indenização baseado em tabela FIPE;
- Aplicação de franquia e cobertura;
- Geração de proposta de indenização;
- Aprovação por gestor;
- Pagamento de indenização (transferência bancária, cheque, depósito);
- Documentação de quitação;
- Histórico de indenizações pagas.

**Requisitos Técnicos:**
- Cálculo automático conforme tabela FIPE;
- Integração com sistema de pagamento;
- Auditoria completa de cálculos.

---

### 2.5 Módulo de Pós-Vendas & Sucesso do Cliente

#### 2.5.1 Central de Atendimento (SAC)

**Funcionalidades:**
- Abertura de tickets de atendimento (web, email, telefone, chat);
- Categorização automática de ticket (dúvida, reclamação, sugestão, problema técnico);
- Atribuição automática a agente disponível;
- Fila de atendimento com priorização;
- Histórico de interações (emails, notas, chamadas);
- Resolução de ticket com documentação;
- Pesquisa de satisfação pós-atendimento;
- Controle de SLA de atendimento;
- Relatórios de volume, tempo médio de resolução, satisfação.

**Requisitos Técnicos:**
- Integração com múltiplos canais (email, telefone, chat);
- Notificações em tempo real;
- Suporte a múltiplos idiomas (se aplicável).

#### 2.5.2 Régua de Retenção e Prevenção de Churn

**Funcionalidades:**
- Identificação automática de clientes em risco de cancelamento (análise de comportamento);
- Gatilhos de ação (inatividade prolongada, múltiplas reclamações, sinistralidade alta);
- Campanhas de retenção automáticas (email, SMS, chamada);
- Ofertas de retenção customizadas (desconto, upgrade de cobertura);
- Acompanhamento de efetividade de campanha;
- Histórico de tentativas de retenção;
- Análise de motivos de cancelamento;
- Relatórios de taxa de churn e retenção.

**Requisitos Técnicos:**
- Machine learning para identificação de risco;
- Automação de campanhas;
- Integração com sistema de CRM e marketing.

#### 2.5.3 Pesquisas de Satisfação (NPS)

**Funcionalidades:**
- Envio automático de pesquisa de satisfação (NPS – Net Promoter Score) após eventos (venda, sinistro, atendimento);
- Questionário customizável;
- Cálculo automático de NPS;
- Análise de feedback qualitativo;
- Segmentação de respondentes (promotores, neutros, detratores);
- Alertas para feedback negativo;
- Relatórios de NPS por período, segmento, vendedor;
- Integração com plano de ação para melhoria.

**Requisitos Técnicos:**
- Integração com ferramentas de pesquisa (SurveyMonkey, Typeform, etc.);
- Análise de sentimento (NLP);
- Relatórios em tempo real.

---

### 2.6 Dashboards e Business Intelligence (BI)

#### 2.6.1 Painéis Gerenciais

**Funcionalidades:**
- Dashboard executivo com KPIs principais (vendas, sinistralidade, inadimplência, satisfação);
- Dashboard de vendas (funil, meta vs. realizado, comissionamento);
- Dashboard de sinistros (volume, custo médio, taxa de sinistralidade);
- Dashboard de atendimento (SLA, satisfação, tempo de resolução);
- Dashboard de carteira (clientes ativos, LTV, churn);
- Filtros por período, região, vendedor, segmento;
- Visualizações em tempo real (gráficos, tabelas, mapas);
- Exportação de relatórios (PDF, Excel);
- Agendamento de relatórios automáticos.

**Requisitos Técnicos:**
- Integração com ferramentas de BI (Power BI, Tableau, Metabase);
- Atualização em tempo real ou próximo real;
- Suporte a múltiplos usuários simultâneos;
- Cache para otimização de performance.

#### 2.6.2 Relatórios Customizáveis

**Funcionalidades:**
- Construtor de relatórios com drag-and-drop;
- Seleção de campos, filtros, agrupamentos;
- Fórmulas customizadas;
- Visualizações múltiplas (tabela, gráfico, mapa);
- Agendamento de relatório para envio automático;
- Compartilhamento de relatório com outros usuários;
- Histórico de relatórios gerados;
- Exportação em múltiplos formatos (PDF, Excel, CSV).

**Requisitos Técnicos:**
- Query builder intuitivo;
- Suporte a múltiplas fontes de dados;
- Otimização de performance para grandes volumes.

---

### 2.7 Integrações com Sistemas Terceiros

#### 2.7.1 Integração com Infocar/Infovist

**Escopo:**
- Consulta de dados de veículo (marca, modelo, ano, valor);
- Consulta de histórico de sinistros;
- Consulta de roubo/procedência;
- Validação de chassi e motor.

**Requisitos Técnicos:**
- API REST com autenticação;
- Timeout: 5 segundos;
- Retry automático em caso de falha;
- Fallback para dados em cache.

#### 2.7.2 Integração com EZchat

**Escopo:**
- Chat em tempo real com clientes;
- Histórico de conversas;
- Integração com CRM (contexto do cliente);
- Roteamento automático para agente disponível;
- Notificações de nova mensagem.

**Requisitos Técnicos:**
- WebSocket para comunicação em tempo real;
- Suporte a múltiplos agentes simultâneos;
- Criptografia de mensagens.

#### 2.7.3 Integração com Cília

**Escopo:**
- Registro de sinistro;
- Consulta de sinistro;
- Atualização de status de sinistro;
- Integração com fluxo de indenização.

**Requisitos Técnicos:**
- API SOAP ou REST;
- Autenticação com certificado digital;
- Sincronização periódica de dados.

#### 2.7.4 Integração com APIs de Seguradoras Parceiras

**Escopo:**
- Consulta de taxas de prêmio;
- Envio de proposta para subscrição;
- Recebimento de apólice;
- Consulta de status de apólice.

**Requisitos Técnicos:**
- Integração customizada por seguradora;
- Documentação de API fornecida por seguradora;
- Suporte a múltiplas seguradoras.

#### 2.7.5 Integração com Gateways de Pagamento

**Escopo:**
- Processamento de pagamento de prêmio;
- Suporte a múltiplos meios (cartão de crédito, boleto, PIX, transferência);
- Confirmação de pagamento;
- Reembolso em caso de cancelamento;
- Histórico de transações.

**Requisitos Técnicos:**
- Integração com Stripe, PagSeguro, Mercado Pago ou equivalente;
- Conformidade com PCI DSS;
- Webhook para notificação de pagamento.

#### 2.7.6 Integração com Plataforma Unique (SaaS)

**Escopo:**
- Sincronização de dados de cliente entre CRM e Unique;
- Integração de módulo financeiro (contas a pagar/receber);
- Integração de módulo orçamentário;
- Integração de sistema de chamados internos;
- Replicação de dados para DW da CONTRATANTE.

**Requisitos Técnicos:**
- API REST com autenticação OAuth;
- Change Data Capture (CDC) para replicação;
- Latência máxima de 5 minutos.

---

## 3. REQUISITOS NÃO-FUNCIONAIS

### 3.1 Desempenho

| Requisito | Métrica |
|-----------|---------|
| Tempo de resposta (operações críticas) | ≤ 2 segundos |
| Tempo de carregamento de página | ≤ 3 segundos |
| Tempo de resposta de API | ≤ 500 ms (p95) |
| Throughput de requisições | ≥ 1.000 req/s |
| Usuários simultâneos suportados | ≥ 1.000 |
| Pico de usuários simultâneos | ≥ 2.000 |

### 3.2 Segurança

| Requisito | Especificação |
|-----------|---------------|
| Criptografia em trânsito | TLS 1.2+ (HTTPS) |
| Criptografia em repouso | AES-256 para dados sensíveis |
| Autenticação | OAuth 2.0, MFA (TOTP/SMS) |
| Autorização | RBAC (Role-Based Access Control) |
| Conformidade OWASP | Top 10 2021 |
| Testes de segurança | SAST, DAST, SCA |
| Conformidade LGPD | Sim |
| Conformidade PCI DSS | Sim (para dados de pagamento) |

### 3.3 Disponibilidade

| Requisito | Métrica |
|-----------|---------|
| Uptime | ≥ 98,0% ao mês |
| RTO (Recovery Time Objective) | ≤ 8 horas |
| RPO (Recovery Point Objective) | ≤ 24 horas |
| Backup | Diário |
| Replicação de dados | Contínua (CDC) |
| Disaster Recovery | Plano documentado |

### 3.4 Manutenibilidade

| Requisito | Especificação |
|-----------|---------------|
| Cobertura de testes | ≥ 80% |
| Documentação | Técnica e funcional completas |
| Código-fonte | Versionado em Git |
| CI/CD | Pipelines automatizados |
| Logs | Centralizados e auditáveis |
| Monitoramento | Métricas, alertas, dashboards |

### 3.5 Escalabilidade

| Requisito | Especificação |
|-----------|---------------|
| Crescimento de dados | Suportar até 10 milhões de registros |
| Crescimento de usuários | Suportar até 10.000 usuários |
| Arquitetura | Microserviços ou modular |
| Load balancing | Automático |
| Caching | Redis ou equivalente |
| CDN | Para conteúdo estático |

### 3.6 Portabilidade

| Requisito | Especificação |
|-----------|---------------|
| Exportação de dados | CSV, JSON, SQL |
| Formato de backup | SQL dump + arquivos |
| Independência de plataforma | Não dependência de vendor lock-in |
| Migração | Procedimentos documentados |

---

## 4. STACK TECNOLÓGICO RECOMENDADO

### 4.1 Backend

| Componente | Opções |
|-----------|--------|
| Linguagem | Node.js/TypeScript, Python (Django/FastAPI), Java (Spring Boot), Go |
| Framework | Express, NestJS, Django, FastAPI, Spring Boot |
| Banco de dados | PostgreSQL, MySQL, MongoDB (conforme requisito) |
| Cache | Redis |
| Fila de mensagens | RabbitMQ, Apache Kafka, AWS SQS |
| ORM | Sequelize, TypeORM, SQLAlchemy, Hibernate |

### 4.2 Frontend

| Componente | Opções |
|-----------|--------|
| Framework | React, Vue.js, Angular |
| Linguagem | TypeScript, JavaScript |
| State management | Redux, Vuex, Context API |
| UI Library | Material-UI, Ant Design, Bootstrap |
| Build tool | Webpack, Vite, Parcel |
| Testing | Jest, Cypress, Playwright |

### 4.3 Infraestrutura

| Componente | Opções |
|-----------|--------|
| Cloud | AWS, Azure, Google Cloud |
| Containerização | Docker |
| Orquestração | Kubernetes, Docker Swarm |
| CI/CD | GitHub Actions, GitLab CI, Jenkins |
| Monitoring | CloudWatch, Datadog, New Relic |
| Logging | ELK Stack, Splunk, CloudWatch |

---

## 5. CRONOGRAMA DE DESENVOLVIMENTO

### 5.1 Fases Principais

| Fase | Duração | Marcos |
|------|---------|--------|
| **1. Levantamento de Requisitos** | Semanas 1-4 | Documento de requisitos aprovado |
| **2. Design Arquitetural** | Semanas 5-8 | Arquitetura aprovada, protótipos |
| **3. Desenvolvimento - Sprint 1-3** | Semanas 9-20 | Módulos Comercial, Vistoria, Carteira |
| **4. Desenvolvimento - Sprint 4-6** | Semanas 21-32 | Módulos Sinistros, Pós-Vendas, BI |
| **5. Integrações** | Semanas 33-40 | Integrações com terceiros funcionais |
| **6. Testes e Homologação** | Semanas 41-48 | Testes UAT, correção de bugs |
| **7. Go-live e Transição** | Semanas 49-52 | Deploy em produção, treinamento |

### 5.2 Marcos de Entrega

| Marco | Semana | Entregáveis |
|-------|--------|-------------|
| MVP v1.0 (Módulo Comercial) | 20 | Código, documentação, testes |
| v1.1 (Módulo Vistoria) | 28 | Código, documentação, testes |
| v1.2 (Módulo Carteira) | 32 | Código, documentação, testes |
| v1.3 (Módulo Sinistros) | 40 | Código, documentação, testes |
| v1.4 (Módulo Pós-Vendas) | 44 | Código, documentação, testes |
| v1.5 (BI e Integrações) | 48 | Código, documentação, testes |
| v1.0 Final (Go-live) | 52 | Deploy, treinamento, handover |

---

## 6. CRITÉRIOS DE ACEITE

### 6.1 Aceite Funcional

Cada módulo será considerado aceito quando:

- Todas as funcionalidades especificadas estejam implementadas e operacionais;
- Testes unitários e de integração passem com sucesso;
- Cobertura de testes seja ≥ 80%;
- Documentação técnica e funcional esteja completa;
- Não haja incidentes críticos (Sev.1) em produção por 15 dias consecutivos;
- CONTRATANTE valide funcionalidades em ambiente de homologação.

### 6.2 Aceite Técnico

O CRM será considerado aceito tecnicamente quando:

- Relatórios SAST/DAST/SCA não identifiquem vulnerabilidades críticas (Sev.1);
- Performance atenda aos requisitos especificados;
- Uptime alcance ≥ 98%;
- Backup e DR estejam operacionais e testados;
- Documentação de infraestrutura esteja completa;
- Treinamento de operação tenha sido realizado.

### 6.3 Aceite Final

O CRM será considerado aceito finalmente quando:

- Todos os módulos tenham sido aceitos funcionalmente;
- Testes de aceitação do usuário (UAT) tenham sido concluídos com sucesso;
- Handover conforme Checklist (Anexo F) tenha sido realizado;
- Propriedade intelectual tenha sido transferida e registrada no INPI;
- Treinamento de usuários tenha sido concluído.

---

## 7. RESPONSABILIDADES

### 7.1 Responsabilidades da CONTRATADA

- Desenvolvimento conforme especificações;
- Testes unitários, integração e aceitação;
- Documentação técnica e funcional;
- Suporte durante desenvolvimento;
- Correção de bugs identificados;
- Implementação de melhorias solicitadas (conforme Change Order);
- Treinamento de usuários (40 horas);
- Handover completo.

### 7.2 Responsabilidades da CONTRATANTE

- Aprovação de requisitos e design;
- Fornecimento de credenciais de terceiros;
- Validação de entregas;
- Participação em reuniões de projeto;
- Aprovação de Change Orders;
- Disponibilização de ambiente de testes;
- Feedback e sugestões de melhoria.

---

## 8. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|--------|-----------|
| Atraso em integração com terceiros | Alta | Alto | Iniciar integração cedo, ter fallback |
| Mudança de requisitos | Média | Alto | Processo de Change Order formal |
| Indisponibilidade de terceiros | Média | Médio | Cache de dados, fallback local |
| Falta de recursos | Baixa | Alto | Escalação, contratação de recursos adicionais |
| Problemas de performance | Média | Alto | Testes de carga, otimização contínua |

---

## 9. COMUNICAÇÃO E GOVERNANÇA

### 9.1 Reuniões

- **Kick-off:** Início do projeto;
- **Planejamento:** Início de cada sprint (semanal);
- **Status:** Terça-feira 10:00 (semanal);
- **Revisão:** Fim de cada sprint (semanal);
- **Retrospectiva:** Fim de cada sprint (semanal);
- **Escalação:** Conforme necessário.

### 9.2 Comunicação

- **Canal principal:** Email e plataforma de projeto (Jira, Asana, etc.);
- **Urgências:** Telefone/WhatsApp;
- **Documentação:** Compartilhada em repositório ou drive.

### 9.3 Governança

- **Aprovações:** CONTRATANTE aprova requisitos, design, testes;
- **Change Control:** Change Orders formais para alterações de escopo;
- **Qualidade:** Revisão de código, testes, segurança;
- **Escalação:** Gerente de Projeto → Diretor em caso de impasse.

---

## 10. TERMOS E CONDIÇÕES ESPECÍFICAS

### 10.1 Propriedade Intelectual

Conforme Cláusula 4 do Contrato Mestre.

### 10.2 Confidencialidade

Conforme Cláusula 19 do Contrato Mestre.

### 10.3 Segurança

Conforme Cláusula 9 do Contrato Mestre e Anexo C.

---

**Aprovação:**

**CONTRATANTE:** _____________________________ Data: _____/_____/_____

**CONTRATADA:** _____________________________ Data: _____/_____/_____

---

**FIM DO ANEXO A**
