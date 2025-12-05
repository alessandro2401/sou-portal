# CONTRATO MESTRE DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SERVIÇOS DE TECNOLOGIA

## VERSÃO CONSOLIDADA – PROPRIEDADE INTEGRAL DO SOFTWARE E ACESSO TÉCNICO TOTAL

---

## PREÂMBULO

Este Contrato de Prestação de Serviços de Desenvolvimento de Software, Licenciamento (SaaS) e Suporte ("**Contrato**") é celebrado entre as partes abaixo identificadas:

**CONTRATANTE:** MMB LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob nº 04.979.104/0001-40, com sede na Rua Dona Gercina Borges Teixeira, nº 182, Qd. F17, Lt. 03, Setor Sul, Goiânia/GO, neste ato representada por seu(s) representante(s) legal(is) devidamente constituído(s), doravante denominada **CONTRATANTE**.

**CONTRATADA:** WHY CONSULTING LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob nº 35.759.063/0001-00, com sede na Av. Deputado Jamel Cecílio, nº 3455, Quadra QC, Lote 2E, Sala 406, Jardim Goiás, Goiânia/GO, neste ato representada por seu(s) representante(s) legal(is) devidamente constituído(s), doravante denominada **CONTRATADA**.

A CONTRATANTE e a CONTRATADA, em conjunto, serão denominadas **Partes** e, individualmente, **Parte**.

---

## CLÁUSULA 1 – OBJETO E ABRANGÊNCIA

### 1.1 Escopo Geral

O presente Contrato tem por objeto a prestação de serviços de tecnologia integrados, compreendendo:

**(i) Desenvolvimento Customizado de Sistema CRM:** Desenvolvimento, implementação, testes, homologação e entrega de um sistema de Gestão de Relacionamento com Clientes ("**CRM**"), sob encomenda e conforme especificações técnicas e funcionais detalhadas no Anexo A – Especificações Técnicas e Escopo de Trabalho (SOW);

**(ii) Licenciamento de Uso (SaaS):** Disponibilização de acesso à Plataforma Unique ("**Unique**"), de propriedade exclusiva da CONTRATADA, em modelo Software as a Service (SaaS), para operação de módulos específicos conforme Anexo A;

**(iii) Serviços Recorrentes:** Suporte técnico, manutenção corretiva, manutenção evolutiva, monitoramento, hospedagem em infraestrutura de nuvem e serviços de operação contínua do CRM;

**(iv) Integrações:** Implementação de integrações entre o CRM e sistemas de terceiros, incluindo a Plataforma Unique, conforme Anexo B – Especificações de Integrações e Interoperabilidade.

### 1.2 Prevalência de Disposições Protetivas

Em caso de conflito ou ambiguidade entre as disposições deste Contrato, prevalecerão aquelas que assegurem:

- A propriedade integral do CRM e de todos os seus Entregáveis pela CONTRATANTE;
- O acesso técnico irrestrito da CONTRATANTE aos ambientes, dados, repositórios e artefatos do CRM;
- A máxima proteção dos direitos e interesses da CONTRATANTE;
- A continuidade operacional e a portabilidade de dados.

### 1.3 Integração de Documentos

Este Contrato é integrado pelos seguintes anexos, que dele fazem parte indissociável:

- **Anexo A:** Especificações Técnicas, Escopo de Trabalho (SOW) e Requisitos Funcionais e Não-Funcionais
- **Anexo B:** Especificações de Integrações e Interoperabilidade
- **Anexo C:** Requisitos de Segurança da Informação e Ciclo de Vida de Desenvolvimento Seguro (SDLC)
- **Anexo D:** Tabela de Créditos de Serviço (SLA)
- **Anexo E:** Tabela de Preços, Parcelas e Condições de Pagamento
- **Anexo F:** Checklist de Handover e Transição
- **Anexo G:** Lista de Segmentos e Concorrentes (para fins de Não-Concorrência)
- **Anexo H:** Procedimentos de Registro de Propriedade Intelectual e Provas de Titularidade

---

## CLÁUSULA 2 – DEFINIÇÕES E TERMOS

Para fins deste Contrato, os seguintes termos possuem os significados abaixo especificados:

**2.1 Entregáveis:** Todo e qualquer artefato, documento, código ou ativo produzido no âmbito do CRM, incluindo, sem limitação: código-fonte e código objeto compilado; Infrastructure as Code (IaC); pipelines de Integração Contínua/Entrega Contínua (CI/CD); scripts de build, deploy e migração; diagramas arquiteturais e de design; Architecture Decision Records (ADRs); documentação técnica e funcional completa; manuais de operação e usuário; runbooks; Software Bill of Materials (SBOM); casos de teste; relatórios de testes e cobertura de código; relatórios de análise estática de segurança (SAST), testes dinâmicos de segurança (DAST) e análise de composição de software (SCA).

**2.2 Ambientes:** Os três ambientes de execução do CRM: (i) DEV (Desenvolvimento); (ii) HML (Homologação); (iii) PRD (Produção).

**2.3 CDC/Replicação:** Mecanismo de captura e replicação de dados do CRM (e, quando aplicável, da Plataforma Unique) para o Data Warehouse (DW) ou Data Lake da CONTRATANTE, em tempo quase real.

**2.4 Severidade de Incidentes:** Classificação de impacto de problemas técnicos:
- **Sev.1 (Crítica):** Indisponibilidade total do sistema ou perda irreversível de dados;
- **Sev.2 (Alta):** Impacto relevante em funcionalidades críticas sem indisponibilidade total;
- **Sev.3 (Média):** Impacto moderado em funcionalidades ou desempenho;
- **Sev.4 (Baixa):** Melhorias, consultas, problemas cosméticos ou de baixo impacto.

**2.5 RPO/RTO:** 
- **RPO (Recovery Point Objective):** Ponto de recuperação máximo aceitável, definido como a quantidade máxima de dados que pode ser perdida em caso de falha;
- **RTO (Recovery Time Objective):** Tempo máximo de recuperação aceitável, definido como o tempo máximo para restaurar o sistema à operação normal.

**2.6 Dados Pessoais:** Toda informação relacionada a pessoa natural identificada ou identificável, conforme definido pela Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e legislação aplicável.

**2.7 Go-live:** Momento de transição do CRM para ambiente de produção e início da operação em ambiente real.

**2.8 Setup:** Fase de desenvolvimento, implementação e configuração inicial do CRM até o Go-live.

**2.9 Mensalidade:** Valor mensal recorrente devido pela CONTRATANTE pelos serviços de suporte, manutenção, operação e licenciamento da Plataforma Unique.

**2.10 Change Order:** Documento formal de alteração de escopo, prazos e/ou custos, assinado por ambas as Partes.

---

## CLÁUSULA 3 – ESCOPO TÉCNICO DO CRM

### 3.1 Especificações Funcionais

O CRM será desenvolvido com os seguintes módulos e funcionalidades, conforme detalhado no Anexo A:

#### **Módulo Comercial (Aquisição e Vendas)**
- Gestão de Leads e Funil de Vendas com visualização Kanban e distribuição automática;
- Cotador Inteligente com cálculo multicritério, integração com tabela FIPE, configuração de cotas de participação e geração automática de propostas em PDF e Link;
- Adesão Digital com coleta de dados, upload de documentos (CNH, CRLV) e assinatura eletrônica;
- Gestão de metas comerciais e cálculo automático de comissionamento.

#### **Módulo de Vistoria Prévia & Onboarding**
- Agendamento de vistorias integrado ao fluxo de venda;
- Integração com sistema de vistoria Infovist da Infocar, incluindo checklist obrigatório, captura de fotos com marca d'água (geolocalização e data/hora), validação de chassi e motor;
- Mesa de Análise com workflow de aprovação/reprovação de vistorias;
- Integração com bureaus de dados para verificação de procedência (Infocar/Infovist).

#### **Módulo de Gestão de Carteira (CRM 360)**
- Visão única do associado/cliente com timeline completa de interações;
- Gestão de veículos ativos e inativos, condutores e beneficiários;
- Clube de Benefícios integrado.

#### **Módulo de Gestão de Eventos (Sinistros)**
- Abertura de Aviso de Sinistro com integração ao sistema Cília, upload de Boletim de Ocorrência e fotos;
- Acompanhamento de Reparo com gestão de oficinas, orçamentos e status de funilaria/pintura;
- Fluxo de Indenização Integral para casos de Perda Total e Roubo.

#### **Módulo de Pós-Vendas & Sucesso do Cliente**
- Central de Atendimento (SAC) com abertura de tickets, gestão de fila e controle de SLA;
- Régua de Retenção com automação de prevenção de cancelamento (Churn);
- Pesquisas de satisfação com cálculo de Net Promoter Score (NPS).

#### **Dashboards e Business Intelligence (BI)**
- Painéis gerenciais em tempo real para acompanhamento de Vendas, Sinistralidade, Inadimplência e Operacional;
- Relatórios customizáveis e exportação de dados.

#### **Integrações com Sistemas Terceiros**
- Infocar, EZchat, Cília, APIs de seguradoras parceiras, Gateways de Pagamento e Assinatura Digital, conforme especificado no Anexo B.

### 3.2 Requisitos Não-Funcionais

O CRM atenderá aos seguintes requisitos não-funcionais:

- **Desempenho:** Tempo de resposta máximo de 2 segundos para operações críticas; suporte a no mínimo 1.000 usuários simultâneos;
- **Segurança:** Conformidade com OWASP Top 10, criptografia de dados em trânsito (TLS 1.2+) e em repouso, autenticação multifator (MFA), controle de acesso baseado em papéis (RBAC);
- **Disponibilidade:** Uptime mínimo de 98,0% ao mês, conforme Cláusula 11;
- **Manutenibilidade:** Código bem estruturado, documentado e testado; cobertura de testes mínima de 80%;
- **Escalabilidade:** Arquitetura preparada para crescimento de dados e usuários;
- **Portabilidade:** Dados exportáveis em formatos abertos (CSV, JSON, SQL).

### 3.3 Evolução de Escopo

Qualquer alteração, adição ou exclusão de funcionalidades em relação ao escopo definido no Anexo A deverá ser formalizada por meio de **Change Order** escrito, assinado por ambas as Partes, especificando:

- Descrição detalhada da alteração;
- Impacto em prazo (extensão de datas);
- Impacto em custos (valores adicionais ou descontos);
- Aprovação expressa da CONTRATANTE.

Sem a formalização de Change Order, a CONTRATADA não é obrigada a executar alterações de escopo, e a CONTRATANTE não é obrigada a pagar custos adicionais.

---

## CLÁUSULA 4 – PROPRIEDADE INTELECTUAL DO CRM (CESSÃO AUTOMÁTICA E DEFINITIVA)

### 4.1 Transferência de Direitos Patrimoniais

A CONTRATADA cede, transfere e outorga à CONTRATANTE, desde o momento da criação de cada Entregável e por prazo indeterminado, **todos os direitos patrimoniais de autor** e demais direitos de propriedade intelectual sobre o CRM e seus Entregáveis, em caráter:

- **Total:** Abrangendo a integralidade dos direitos, sem retenção de direitos pela CONTRATADA;
- **Definitivo:** Sem possibilidade de revogação ou limitação temporal;
- **Irrevogável:** Não sujeito a reversão ou condição suspensiva;
- **Oneroso:** Remunerado pelos valores de Setup/Desenvolvimento e Mensalidade previstos neste Contrato.

Os direitos transferidos incluem, sem limitação: uso, fruição, modificação, integração, compilação, reprodução, disponibilização, distribuição, comercialização e criação de obras derivadas.

### 4.2 Operação Automática da Cessão

A cessão de direitos opera-se **automaticamente** à medida que cada Entregável é criado, versionado e entregue, independentemente de:

- Aceite formal ou funcional pela CONTRATANTE;
- Conclusão do projeto;
- Quitação de valores (embora a propriedade seja garantida desde a criação, a CONTRATANTE assume a obrigação de pagamento);
- Medição por marcos ou fases.

Desta forma, a CONTRATANTE é proprietária de cada componente desenvolvido desde o momento de sua criação, ainda que o projeto não tenha sido concluído.

### 4.3 Direitos Morais dos Autores

Os direitos morais dos autores do CRM (direito de paternidade, integridade da obra, etc.) permanecem inalterados e com a CONTRATADA e seus desenvolvedores. A CONTRATADA compromete-se a **não praticar atos que limitem ou impeçam o exercício dos direitos patrimoniais** pela CONTRATANTE, incluindo:

- Não reivindicar propriedade sobre o CRM ou Entregáveis;
- Não impedir modificações, derivações ou adaptações pela CONTRATANTE;
- Não remover ou alterar avisos de propriedade intelectual, salvo quando autorizado pela CONTRATANTE.

### 4.4 Componentes Genéricos e Licenças de Terceiros

#### 4.4.1 Retenção de Componentes Genéricos

Obras preexistentes, frameworks genéricos, bibliotecas de código aberto e componentes reutilizáveis da CONTRATADA permanecem de sua titularidade exclusiva, desde que:

- **Não incorporem** dados, regras de negócio específicas ou segredos comerciais da CONTRATANTE;
- **Não sejam** customizados exclusivamente para o CRM da CONTRATANTE;
- **Sejam** utilizáveis em outros projetos ou contextos sem modificação.

#### 4.4.2 Licença Perpétua para Componentes Necessários

Se componentes genéricos forem estritamente necessários ao funcionamento do CRM, a CONTRATADA outorga à CONTRATANTE uma **licença perpétua, mundial, irrevogável e sem ônus** para:

- Usar o componente no âmbito do CRM;
- Modificar o componente conforme necessário para o CRM;
- Integrar o componente com outros códigos da CONTRATANTE;
- Distribuir o CRM contendo o componente.

#### 4.4.3 Software Bill of Materials (SBOM) e Licenças Copyleft

A CONTRATADA entregará, a cada release do CRM, um **Software Bill of Materials (SBOM)** completo, listando:

- Todas as dependências de código aberto utilizadas;
- Versões específicas;
- Licenças aplicáveis;
- Identificação de vulnerabilidades conhecidas.

A CONTRATADA **não utilizará licenças copyleft forte** (tais como GPLv3, AGPL, SSPL) sem **anuência expressa e escrita** da CONTRATANTE. Caso a CONTRATADA utilize tais licenças, deverá:

- Notificar a CONTRATANTE previamente;
- Obter aprovação escrita;
- Assegurar que a CONTRATANTE compreenda as obrigações impostas pela licença;
- Indenizar a CONTRATANTE por qualquer violação ou consequência.

### 4.5 Propriedade de Dados

Todos os dados inseridos, processados, armazenados ou gerados pelo CRM pertencem **exclusivamente à CONTRATANTE**. A CONTRATADA não possui direitos sobre os dados e é obrigada a:

- Manter os dados em sigilo;
- Proteger os dados contra acesso não autorizado;
- Permitir exportação e replicação dos dados pela CONTRATANTE a qualquer tempo;
- Eliminar os dados conforme instrução da CONTRATANTE.

### 4.6 Garantia de Não-Infração e Indenização

A CONTRATADA **garante** que o CRM e todos os Entregáveis:

- **Não infringem** direitos de propriedade intelectual, patentes, marcas ou direitos autorais de terceiros;
- **Não violam** confidencialidade ou segredos comerciais de terceiros;
- **Não contêm** código ou conteúdo roubado, plagiado ou obtido ilicitamente.

Em caso de reclamação, notificação ou ação judicial de terceiros alegando infração de direitos de propriedade intelectual, a CONTRATADA obriga-se a:

- **Defender** a CONTRATANTE contra a reclamação, arcando com custos legais;
- **Indenizar** a CONTRATANTE por todas as perdas, danos, multas e custos incorridos;
- **Manter indene** a CONTRATANTE de qualquer responsabilidade;
- **Substituir ou sanear** os componentes infratores em até **10 (dez) dias úteis** contados da notificação, sem custo adicional para a CONTRATANTE;
- Se impossível sanear a infração, **reembolsar** à CONTRATANTE todos os valores pagos pelo CRM ou Entregável infrator.

### 4.7 Registro no INPI (Sistema e-Software) – Obrigatoriedade

A CONTRATADA é **obrigada** a preparar, protocolar e acompanhar o Registro de Programa de Computador perante o Instituto Nacional da Propriedade Industrial (INPI), no sistema e-Software, conforme procedimentos estabelecidos pelo INPI.

#### 4.7.1 Titularidade e Identificação

O registro será feito **em nome da CONTRATANTE** como titular exclusivo. Os autores do código serão devidamente identificados na documentação de registro, preservando-se os direitos morais.

#### 4.7.2 Cronograma de Registros

- **Depósito Inicial:** Em até **30 (trinta) dias** contados do aceite expresso ou funcional do MVP (versão 1.0.0) do CRM;
- **Depósitos Complementares:** A cada release major (versão X.0.0), dentro de 30 dias após a entrega;
- **Depósito Final:** No handover final, conforme Cláusula 16.

#### 4.7.3 Conteúdo do Dossiê de Registro

O dossiê de registro conterá:

- Título e versão do programa;
- Identificação completa do titular (CONTRATANTE);
- Identificação dos autores;
- Declaração de originalidade e titularidade, com referência a este Contrato;
- Trechos representativos de código-fonte e/ou documentação técnica, suficientes para individualizar o programa conforme guias do INPI;
- Preservação de segredos de negócio e dados pessoais (não serão depositados dados sensíveis).

#### 4.7.4 Sigilo e Compliance

O conteúdo depositado no INPI permanecerá em sigilo conforme regulamentação do INPI. A CONTRATADA assegurará que o material depositado:

- Não contenha licenças restritivas que limitem direitos da CONTRATANTE;
- Não incorpore conteúdos de terceiros sem autorização;
- Seja original ou devidamente autorizado.

#### 4.7.5 Comprovação e Entrega de Evidências

Em até **5 (cinco) dias úteis** após cada protocolo no INPI, a CONTRATADA entregará à CONTRATANTE:

- Número do processo de registro;
- Comprovantes de pagamento das taxas;
- Recibo de protocolo emitido pelo INPI;
- Certificado de registro (quando emitido);
- Hash SHA-256 dos arquivos depositados;
- Carimbo de tempo (timestamp) da submissão.

#### 4.7.6 Custos

- As **taxas e retribuições do INPI** correrão por conta da CONTRATANTE;
- O **preparo do dossiê e protocolo** serão executados pela CONTRATADA **sem custo adicional**, salvo despesas oficiais de terceiros previamente aprovadas por escrito.

#### 4.7.7 Provas Complementares (Opcionais)

A CONTRATADA apoiará a CONTRATANTE na realização de:

- **Ata Notarial:** Lavratura em Cartório de Notas para captura de evidências técnicas (repositórios Git, commits, SBOM, diagramas, documentação);
- **Registro no RTD:** Registro de Títulos e Documentos em cartório competente, para registro de contratos, cessões e evidências técnicas;
- **Registro na Biblioteca Nacional:** Quando aplicável, registro de manuais e documentação técnica no Escritório de Direitos Autorais (EDA) da Biblioteca Nacional.

Tais provas complementares fortalecem a comprovação de titularidade e data de criação do CRM.

---

## CLÁUSULA 5 – REPOSITÓRIOS, VERSIONAMENTO E ENTREGA CONTÍNUA

### 5.1 Propriedade e Administração de Repositórios

Todos os repositórios Git do CRM serão criados e hospedados **na organização/conta da CONTRATANTE**, em plataforma de controle de versão (GitHub, GitLab, Bitbucket ou equivalente). A CONTRATANTE deterá:

- **Propriedade** exclusiva dos repositórios;
- **Administração** e controle de acesso;
- **Acesso root/owner** para todos os repositórios;
- **Direito de cópia** e backup dos repositórios a qualquer tempo.

Os repositórios incluirão:

- Código-fonte do CRM (em linguagens de programação especificadas);
- Infrastructure as Code (IaC) para provisionamento de ambientes;
- Pipelines de CI/CD;
- Documentação técnica e funcional;
- Scripts de build, deploy e migração;
- Testes automatizados.

### 5.2 Práticas de Versionamento e Controle de Qualidade

A CONTRATADA realizará:

- **Commits diários** de código funcional, com mensagens descritivas;
- **Pull Requests (PRs) semanais** com consolidação de mudanças;
- **Branch protection** para ramos principais (main/master, develop, release);
- **Revisão por pares** (peer review) obrigatória antes de merge;
- **Trilha de auditoria** completa de todas as alterações (logs de Git);
- **Assinatura de commits** com chaves GPG (quando aplicável).

### 5.3 Gestão de Segredos e Credenciais

Segredos, chaves de API, tokens de autenticação e credenciais serão gerenciados **exclusivamente em cofre de segredos** da CONTRATANTE (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault ou equivalente). A CONTRATADA:

- **Nunca** armazenará segredos em código ou repositórios;
- **Nunca** compartilhará credenciais por email ou chat;
- **Utilizará** apenas as credenciais fornecidas pela CONTRATANTE;
- **Revogará** acesso imediatamente após desligamento ou término do contrato.

### 5.4 Entregáveis a Cada Release

A cada release (versão) do CRM, a CONTRATADA entregará um pacote completo contendo:

**(i) Código-fonte Versionado**
- Código-fonte completo em formato legível;
- Versionado conforme Semantic Versioning (X.Y.Z);
- Compilável e executável sem dependências externas não documentadas.

**(ii) Infrastructure as Code (IaC) e Pipelines Atualizados**
- Arquivos de IaC (Terraform, CloudFormation, Ansible, Docker Compose, Kubernetes manifests);
- Pipelines de CI/CD (GitHub Actions, GitLab CI, Jenkins, etc.) atualizados;
- Scripts de provisionamento de ambientes DEV, HML e PRD.

**(iii) Documentação Técnica e Funcional**
- Arquitetura do sistema (diagramas C4, UML);
- Guia de instalação e configuração;
- Guia de operação e troubleshooting;
- API documentation (Swagger/OpenAPI);
- Diagrama de fluxos de dados;
- Decisões arquiteturais (ADRs).

**(iv) Runbooks e Procedimentos Operacionais**
- Procedimentos de deploy e rollback;
- Procedimentos de backup e recuperação;
- Procedimentos de escalabilidade;
- Procedimentos de incidente e disaster recovery.

**(v) Software Bill of Materials (SBOM) e Relatório de Licenças**
- Lista completa de dependências e versões;
- Licenças aplicáveis a cada dependência;
- Identificação de vulnerabilidades conhecidas (CVEs);
- Plano de remediação de vulnerabilidades.

**(vi) Relatórios de Testes e Cobertura**
- Relatórios de testes unitários (cobertura mínima 80%);
- Relatórios de testes de integração;
- Relatórios de testes de aceitação;
- Cobertura de código por módulo;
- Casos de teste documentados.

**(vii) Relatórios de Segurança (SAST/DAST/SCA) e Plano de Correção**
- Relatório de análise estática de segurança (SAST);
- Relatório de testes dinâmicos de segurança (DAST);
- Análise de composição de software (SCA) para vulnerabilidades em dependências;
- Classificação de severidade de achados;
- Plano de correção com prazos (conforme Cláusula 9.2).

---

## CLÁUSULA 6 – AMBIENTES E INFRAESTRUTURA (CRM)

### 6.1 Propriedade e Faturamento de Infraestrutura

Os três ambientes do CRM (DEV, HML, PRD) serão provisionados **exclusivamente em contas de nuvem da CONTRATANTE**, em provedores como AWS, Azure, Google Cloud ou equivalente. A CONTRATANTE:

- **Detém propriedade** das contas e recursos de nuvem;
- **Recebe faturamento** diretamente do provedor de nuvem em seu nome;
- **Controla** o provisionamento e desprovisionamento de recursos;
- **Pode** auditar custos e uso de recursos.

A CONTRATADA **não** terá contas de nuvem próprias para o CRM; utilizará apenas contas da CONTRATANTE.

### 6.2 Acesso Administrativo e Controle de Acesso Baseado em Papéis (RBAC)

A CONTRATANTE deterá **acesso administrativo (owner/root)** a todos os recursos do CRM, incluindo:

- Servidores (EC2, VMs, containers);
- Orquestradores de containers (Kubernetes, Docker Swarm);
- Filas de mensagens (SQS, RabbitMQ, Kafka);
- Storage (S3, Blob Storage, GCS);
- Content Delivery Networks (CDN);
- Web Application Firewalls (WAF);
- Load balancers e API gateways;
- Bancos de dados (RDS, DynamoDB, Cosmos DB, etc.);
- Serviços de jobs e scheduling.

A CONTRATADA terá **perfis RBAC mínimos**, limitados ao necessário para:

- Realizar deployments de código;
- Monitorar logs e métricas;
- Executar operações de suporte;
- Investigar incidentes.

A CONTRATADA **nunca** terá acesso root/owner ou capacidade de:

- Deletar recursos;
- Modificar políticas de segurança;
- Acessar dados de outras aplicações;
- Modificar configurações de rede ou firewall.

### 6.3 Observabilidade e Retenção de Logs

Todas as métricas, logs, traces, dashboards e alertas do CRM ficarão sob **ferramentas e contas da CONTRATANTE**, tais como:

- CloudWatch, Azure Monitor, Google Cloud Monitoring;
- Elasticsearch, Splunk, DataDog, New Relic ou equivalentes;
- Ferramentas de APM (Application Performance Monitoring).

A CONTRATANTE terá:

- **Acesso total** a métricas, logs e traces;
- **Retenção mínima de 365 dias** para logs;
- **Capacidade de auditoria** completa;
- **Alertas configuráveis** para incidentes.

---

## CLÁUSULA 7 – DADOS, BANCO(S) DE DADOS E PORTABILIDADE (CRM)

### 7.1 Propriedade e Acesso ao Banco de Dados

O(s) banco(s) de dados do CRM será(ão) provisionado(s) **exclusivamente em recursos da CONTRATANTE**, em serviços gerenciados (RDS, Managed Databases) ou auto-hospedados em infraestrutura da CONTRATANTE.

A CONTRATANTE deterá:

- **Acesso DBA (Database Administrator)** completo ao banco de dados;
- **Capacidade de dump completo** (backup lógico) do banco de dados on-demand;
- **Acesso direto** ao banco de dados para consultas, relatórios e análises;
- **Direito de restauração** de backups a qualquer tempo;
- **Propriedade exclusiva** de todos os dados.

A CONTRATADA terá acesso **apenas** às credenciais de aplicação necessárias para operação do CRM, sem acesso DBA.

### 7.2 Change Data Capture (CDC) e Replicação para Data Warehouse

A CONTRATADA implementará mecanismo de **Change Data Capture (CDC)** ou replicação de dados para o Data Warehouse (DW) ou Data Lake da CONTRATANTE, garantindo:

- **Exportação contínua** de dados do CRM em tempo quase real (latência máxima de 5 minutos);
- **Formato aberto** (CSV, JSON, SQL, Parquet ou equivalente);
- **Integridade** dos dados replicados;
- **Rastreabilidade** de alterações (timestamps, operações INSERT/UPDATE/DELETE);
- **Conformidade** com LGPD (sem exposição de dados pessoais sensíveis sem autorização).

A CONTRATANTE poderá utilizar os dados replicados para:

- Business Intelligence e análises;
- Relatórios gerenciais;
- Backup e disaster recovery;
- Migração para sistemas alternativos.

### 7.3 Backups e Disaster Recovery (DR)

A CONTRATADA implementará e manterá:

#### 7.3.1 Política de Backups

- **Frequência:** Backups diários do banco de dados;
- **RPO (Recovery Point Objective):** Máximo de 24 horas de perda de dados;
- **RTO (Recovery Time Objective):** Máximo de 8 horas para restauração completa;
- **Armazenamento:** Backups armazenados em múltiplas regiões geográficas para redundância;
- **Criptografia:** Backups criptografados em repouso e em trânsito.

#### 7.3.2 Testes de Restauração

- **Frequência:** Testes trimestrais de restauração de backups;
- **Documentação:** Relatório de teste contendo data, hora, duração, sucesso/falha;
- **Validação:** Verificação de integridade dos dados restaurados;
- **Evidências:** Entrega de relatório à CONTRATANTE com evidências.

#### 7.3.3 Plano de Disaster Recovery

A CONTRATADA manterá plano de DR documentado, incluindo:

- Procedimentos de failover automático e manual;
- Replicação de banco de dados para região secundária;
- Testes periódicos de DR;
- Comunicação de incidentes e status de recuperação.

---

## CLÁUSULA 8 – PLATAFORMA UNIQUE (SaaS) – TITULARIDADE, DADOS E ESCROW

### 8.1 Titularidade Exclusiva da Plataforma Unique

A Plataforma Unique e todos os seus módulos, código-fonte, banco de dados e propriedade intelectual são de **titularidade exclusiva da CONTRATADA**. A CONTRATANTE **não adquire propriedade** sobre a Unique, mas apenas **licença não exclusiva de uso** em modelo SaaS, conforme Cláusula 2.3 do Contrato.

### 8.2 Garantias de Acesso e Exportação de Dados

Não obstante a titularidade exclusiva da CONTRATADA, esta assegurará à CONTRATANTE:

#### 8.2.1 Exportação Contínua de Dados

- **Formato aberto:** Exportação dos dados da Unique em formatos abertos (CSV, JSON, SQL, Parquet);
- **Frequência:** Exportação contínua ou sob demanda, sem demora;
- **Completude:** Todos os dados inseridos na Unique, sem exclusões ou filtros;
- **Integridade:** Dados exportados íntegros e verificáveis.

#### 8.2.2 Change Data Capture (CDC) e Replicação

- **CDC:** Implementação de mecanismo de CDC para replicação de dados da Unique;
- **Destino:** Replicação para repositório, Data Warehouse ou Data Lake da CONTRATANTE;
- **Alternativa:** Se CDC não for viável, acesso read-only a banco de dados de réplica da Unique, hospedado em infraestrutura da CONTRATANTE;
- **Latência:** Tempo quase real (máximo 5 minutos de atraso).

#### 8.2.3 SLA de Interoperabilidade

A CONTRATADA garantirá SLA de interoperabilidade entre Unique e CRM, conforme Anexo B, incluindo:

- Disponibilidade mínima de 98% das integrações;
- Tempo de resposta máximo de 2 segundos para chamadas de API;
- Suporte técnico para resolução de problemas de integração.

### 8.3 Escrow de Código-Fonte da Plataforma Unique

Para garantir a continuidade de operação da Plataforma Unique em cenários adversos, a CONTRATADA depositará o código-fonte, scripts de build e documentação técnica da Unique em **agente de escrow independente** (terceira parte de confiança), conforme procedimentos padrão de escrow de software.

#### 8.3.1 Condições de Liberação

O código-fonte será liberado da custódia do agente de escrow para a CONTRATANTE em caso de:

- **Insolvência ou falência** da CONTRATADA;
- **Descontinuidade do produto:** Anúncio de encerramento da Plataforma Unique;
- **Descumprimento material:** Violação grave e reiterada de obrigações contratuais;
- **SLA crítico reiterado:** Falha repetida em manter SLA crítico (Sev.1) por mais de 3 ocorrências em 6 meses;
- **Encerramento do Contrato:** Término do Contrato por qualquer motivo, com prazo de transição.

#### 8.3.2 Custos e Administração

- **Custos:** Custos de escrow (depósito, manutenção, liberação) correrão por conta da CONTRATADA;
- **Agente:** Agente de escrow será selecionado mutuamente pelas Partes ou por terceira parte neutra;
- **Atualização:** Código-fonte será atualizado no escrow a cada release major da Unique.

---

## CLÁUSULA 9 – SEGURANÇA DA INFORMAÇÃO E CICLO DE VIDA DE DESENVOLVIMENTO SEGURO (SDLC)

### 9.1 Padrões e Boas Práticas de Segurança

A CONTRATADA observará e evidenciará conformidade com:

#### 9.1.1 OWASP Top 10 e Boas Práticas

- Implementação de controles contra as 10 vulnerabilidades mais críticas do OWASP;
- Validação e sanitização de inputs;
- Proteção contra SQL Injection, XSS, CSRF, XXE, etc.;
- Criptografia de dados sensíveis;
- Autenticação e autorização robustas;
- Logging e monitoramento de segurança.

#### 9.1.2 Ciclo de Vida de Desenvolvimento Seguro (SDLC)

A CONTRATADA adotará processos de desenvolvimento seguro alinhados com:

- **NIST Secure Software Development Framework (SSDF):** Práticas de design seguro, implementação segura, testes de segurança e liberação segura;
- **Microsoft Security Development Lifecycle (SDL):** Treinamento em segurança, requisitos de segurança, design review, implementação segura, testes dinâmicos, liberação e resposta;
- **OWASP Secure Coding Practices:** Guias de codificação segura por linguagem.

#### 9.1.3 Testes e Correções de Vulnerabilidades

A CONTRATADA realizará e evidenciará:

- **Testes de segurança estática (SAST):** Análise de código-fonte para identificar vulnerabilidades;
- **Testes de segurança dinâmica (DAST):** Testes de aplicação em execução para identificar vulnerabilidades;
- **Análise de composição de software (SCA):** Identificação de vulnerabilidades em dependências de terceiros;
- **Testes de penetração:** Testes periódicos por terceira parte especializada;
- **Revisão de segurança:** Code review focado em segurança.

Relatórios de testes serão entregues conforme Cláusula 5.4(vii).

### 9.2 Prazos de Correção de Vulnerabilidades

Vulnerabilidades identificadas serão corrigidas conforme severidade:

| Severidade | Workaround | Correção em Produção | Prazo Total |
|------------|-----------|---------------------|------------|
| **Sev.1 (Crítica)** | < 24 horas | < 72 horas | 3 dias úteis |
| **Sev.2 (Alta)** | < 48 horas | < 120 horas | 5 dias úteis |
| **Sev.3 (Média)** | < 5 dias úteis | < 15 dias úteis | 15 dias úteis |
| **Sev.4 (Baixa)** | Próxima release | Próxima release | 30 dias úteis |

**Definições:**
- **Workaround:** Solução temporária que mitiga o risco enquanto correção definitiva é desenvolvida;
- **Correção em Produção:** Patch ou release corrigido deployado em ambiente PRD.

### 9.3 Incidentes de Segurança

Em caso de incidente de segurança (vazamento de dados, acesso não autorizado, malware, etc.):

- A CONTRATADA notificará a CONTRATANTE **imediatamente** (máximo 24 horas);
- Fornecerá relatório técnico detalhado do incidente;
- Implementará medidas de contenção e remediação;
- Apoiará investigação forense;
- Cumprirá obrigações de notificação à ANPD conforme LGPD (Cláusula 10).

---

## CLÁUSULA 10 – PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD)

### 10.1 Papéis de Controlador e Operador

No tratamento de dados pessoais pela operação do CRM:

- **CONTRATANTE:** Atua como **Controladora** de dados pessoais, responsável por decisões sobre coleta, uso e finalidade;
- **CONTRATADA:** Atua como **Operadora** de dados pessoais, responsável por executar instruções da Controladora conforme LGPD.

Na Plataforma Unique, quando houver tratamento autônomo de dados pela CONTRATADA (ex.: comunicação, marketing, análise própria):

- **CONTRATADA:** Atua como **Controladora independente**, responsável por base legal e obrigações de informação próprias.

Ambas as Partes cumprirão obrigações impostas pela **Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)**.

### 10.2 Incidentes de Segurança e Notificação

As Partes comunicar-se-ão em até **48 horas** a partir da ciência de incidente de segurança envolvendo dados pessoais. Avaliarão, conjuntamente:

- **Natureza do incidente:** Tipo de dado exposto, número de pessoas afetadas;
- **Risco de dano:** Avaliação de risco aos titulares de dados;
- **Necessidade de notificação:** Se notificação à ANPD (Autoridade Nacional de Proteção de Dados) é obrigatória;
- **Comunicação aos titulares:** Se comunicação aos titulares de dados é necessária.

Observar-se-á legislação aplicável (LGPD, regulamentações setoriais, etc.).

### 10.3 Portabilidade e Eliminação de Dados

A CONTRATANTE poderá solicitar, a qualquer tempo:

- **Portabilidade:** Exportação de todos os dados pessoais em formato estruturado, aberto e interoperável;
- **Eliminação:** Exclusão de dados pessoais após conclusão da portabilidade.

A CONTRATADA executará portabilidade em até **30 dias** e eliminará dados em até **30 dias** após confirmação escrita da CONTRATANTE de conclusão da portabilidade.

### 10.4 Transferência Internacional de Dados

Quando dados pessoais forem transferidos para fora do Brasil (ex.: infraestrutura em nuvem em outro país):

- Será observada **base legal adequada** (consentimento, interesse legítimo, etc.);
- Serão implementadas **garantias contratuais** (Standard Contractual Clauses, Binding Corporate Rules, etc.);
- Será avaliada **adequação de proteção** no país de destino;
- Será obtida **anuência da CONTRATANTE** previamente.

---

## CLÁUSULA 11 – SLA DE SUPORTE, DISPONIBILIDADE E RELATÓRIOS

### 11.1 Horário de Atendimento

A CONTRATADA oferecerá suporte técnico:

- **Dias:** Segunda a sexta-feira (excluindo feriados nacionais e estaduais);
- **Horário:** 08:00 às 18:00 (horário de Brasília);
- **Canais:** Telefone, email, sistema de tickets (Unique ou equivalente).

**Janelas de Manutenção Programada:**
- Preferencialmente aos **finais de semana** (sexta-feira 18:00 a segunda-feira 08:00);
- Alternativamente, em **dias úteis durante madrugadas** (22:00 a 06:00);
- **Aviso prévio:** Mínimo de 48 horas antes da manutenção;
- **Duração máxima:** 4 horas contínuas;
- **Frequência máxima:** 1 manutenção por semana.

### 11.2 Tempos de Resposta e Solução

A CONTRATADA compromete-se aos seguintes **prazos máximos** de resposta inicial e solução:

| Severidade | Resposta Inicial | Solução | Prazo Total |
|------------|-----------------|--------|------------|
| **Sev.1 (Crítica)** | 1 hora | 24 horas | 1 dia útil |
| **Sev.2 (Alta)** | 4 horas | 48 horas | 2 dias úteis |
| **Sev.3 (Média)** | 1 dia útil | 10 dias úteis | 10 dias úteis |
| **Sev.4 (Baixa)** | 2 dias úteis | 20 dias úteis | 20 dias úteis |

**Definições:**
- **Resposta Inicial:** Primeiro contato com o cliente confirmando recebimento e iniciando investigação;
- **Solução:** Resolução completa do problema ou implementação de workaround permanente;
- **Prazos:** Contados em dias úteis (segunda a sexta, excluindo feriados).

### 11.3 Disponibilidade (Uptime) do CRM

A CONTRATADA garante disponibilidade mínima do CRM de **≥ 98,0% ao mês**, calculada como:

```
Uptime (%) = (Tempo Total - Tempo de Indisponibilidade) / Tempo Total × 100
```

**Exclusões:**
- Janelas de manutenção programada (conforme Cláusula 11.1);
- Indisponibilidades causadas por fatores externos (falha de provedor de nuvem, internet, terceiros);
- Indisponibilidades causadas por ações da CONTRATANTE (configurações incorretas, ataques DDoS, etc.).

**Cálculo:** Uptime será medido por monitoramento contínuo (Cláusula 6.3) e reportado mensalmente.

### 11.4 Créditos de Serviço (SLA)

Caso a CONTRATADA descumpra o SLA de disponibilidade ou prazos de solução, a CONTRATANTE fará jus a **créditos de serviço** (descontos) sobre a mensalidade do mês de referência, conforme tabela no Anexo D.

**Exemplo de Tabela de Créditos:**

| Uptime Alcançado | Crédito |
|-----------------|---------|
| 97,5% a 98,0% | -10% da mensalidade |
| 97,0% a 97,5% | -20% da mensalidade |
| 96,5% a 97,0% | -30% da mensalidade |
| 96,0% a 96,5% | -40% da mensalidade |
| < 96,0% | -50% da mensalidade |

**Observações:**
- Créditos são **cumulativos** em caso de múltiplas falhas no mesmo mês;
- Créditos são **limitados a 50%** da mensalidade;
- Créditos **não substituem** perdas e danos (direito de indenização permanece);
- Créditos são **automaticamente aplicados** na próxima fatura;
- Créditos **não são reembolsáveis** em dinheiro.

### 11.5 Relatórios Mensais de SLA

A CONTRATADA enviará à CONTRATANTE, até o **5º dia útil** de cada mês, relatório detalhado contendo:

- **Tickets:** Número total, por severidade, por status;
- **Tempos de resposta e solução:** Média, mediana, máximo por severidade;
- **Disponibilidade:** Uptime alcançado, incidentes, duração de indisponibilidades;
- **Incidentes:** Descrição, causa raiz, impacto, resolução;
- **Backlog:** Tickets pendentes, motivos de atraso;
- **Melhorias:** Ações implementadas para melhoria de serviço;
- **Evidências:** Gráficos, logs, comprovantes.

---

## CLÁUSULA 12 – PREÇO, PAGAMENTO E REAJUSTE

### 12.1 Tabela de Preços e Parcelas

Os preços e condições de pagamento constam do **Anexo E – Tabela de Preços**, incluindo:

- **Valor de Setup/Desenvolvimento:** R$ 261.000,00 (duzentos e sessenta e um mil reais);
- **Parcelamento:** 1+11 parcelas mensais de R$ 21.750,00 (vinte e um mil e setecentos e cinquenta reais);
- **Vencimento:** Dia 17 de cada mês;
- **Primeira parcela:** Até 10 dias após assinatura do Contrato;
- **Mensalidade (Licença + Suporte):** R$ 19.800,00 (dezenove mil e oitocentos reais) após Go-live;
- **Plataforma Unique:** Sem custo nos primeiros 12 meses; R$ 2.500,00/mês após 12 meses.

### 12.2 Reajuste Anual

Os preços serão reajustados **anualmente** (a cada 12 meses contados da assinatura) pelo **menor entre IPCA e IGP-M**, conforme:

```
Preço Novo = Preço Anterior × (1 + Índice)
```

**Regras:**
- Aplicar-se-á **variação positiva ou negativa** do índice escolhido;
- **Não é permitida deflação:** Se o índice for negativo, mantém-se o preço anterior;
- **Índice escolhido:** O menor entre IPCA (Índice Nacional de Preços ao Consumidor Amplo) e IGP-M (Índice Geral de Preços – Mercado);
- **Data de referência:** Mês anterior ao aniversário do Contrato.

### 12.3 Mora e Juros

Em caso de atraso no pagamento de qualquer parcela:

- **Multa moratória:** 2% (dois por cento) sobre o valor devido;
- **Juros:** 1% (um por cento) ao mês, pro rata, sobre o valor devido;
- **Correção monetária:** Índice Nacional de Preços ao Consumidor (INPC);
- **Período:** Contado da data de vencimento até a data do efetivo pagamento.

**Exemplo:** Atraso de 15 dias em parcela de R$ 21.750,00:
- Multa: R$ 21.750 × 2% = R$ 435,00
- Juros: R$ 21.750 × 1% × 0,5 = R$ 108,75
- Total com encargos: R$ 22.293,75

### 12.4 Forma de Pagamento

O pagamento das parcelas deverá ser efetuado por **PIX** (transferência instantânea), conforme dados:

- **Chave PIX:** 35.759.063/0001-00 (CNPJ da CONTRATADA)
- **Beneficiário:** WHY CONSULTING LTDA
- **Banco:** [Informar banco]

**Responsabilidades:**
- A CONTRATADA enviará **aviso de vencimento** com antecedência de 7 dias;
- A CONTRATANTE é responsável por realizar o pagamento na data de vencimento;
- **Omissão de aviso não exime** a CONTRATANTE da obrigação de pagamento.

### 12.5 Suspensão por Inadimplência

Após **10 (dez) dias de inadimplência**, a CONTRATADA poderá suspender:

- Serviços de suporte técnico;
- Acesso à Plataforma Unique;
- Implementação de novas funcionalidades;
- Manutenção evolutiva.

**Ressalva:** A suspensão **não afetará** o acesso da CONTRATANTE aos ambientes do CRM e aos dados sob suas contas de nuvem (Cláusula 13.2).

---

## CLÁUSULA 13 – SUSPENSÃO POR INADIMPLÊNCIA E CONTINUIDADE DE ACESSO

### 13.1 Procedimento de Suspensão

A suspensão por inadimplência dependerá de:

- **Notificação prévia** por email ou aviso formal;
- **Prazo de cura de 5 (cinco) dias úteis** para pagamento;
- **Confirmação de recebimento** da notificação.

Caso a CONTRATANTE não pague dentro do prazo de 5 dias úteis, a CONTRATADA poderá suspender os serviços sem necessidade de notificação adicional.

### 13.2 Garantia de Continuidade de Acesso

Qualquer suspensão por inadimplência **não afetará** o acesso da CONTRATANTE a:

- **Ambientes do CRM:** Acesso aos servidores, aplicação e dados em DEV, HML e PRD;
- **Dados:** Acesso aos dados armazenados no banco de dados do CRM;
- **Contas de nuvem:** Acesso às contas de nuvem da CONTRATANTE;
- **Repositórios Git:** Acesso aos repositórios de código-fonte.

A suspensão poderá restringir-se, quando cabível, a:

- Suporte técnico (tickets, chamadas, assistência);
- Plataforma Unique (acesso aos módulos SaaS);
- Manutenção evolutiva (novas funcionalidades).

**Objetivo:** Garantir que a CONTRATANTE não perca acesso aos seus próprios ativos (código, dados, infraestrutura) em caso de inadimplência.

---

## CLÁUSULA 14 – HOMOLOGAÇÃO E ACEITE

### 14.1 Formas de Aceite

O aceite de Entregáveis pode ser:

- **Aceite Expresso:** Formalizado por abertura de chamado/ticket ou assinatura de termo de aceite;
- **Aceite Funcional:** Automático após decurso de prazo sem objeções.

### 14.2 Aceite Funcional Automático

Considera-se **aceite funcional** quando a entrega permanecer **15 (quinze) dias corridos em produção** sem:

- Incidentes críticos (Sev.1) registrados;
- Incidentes críticos não sanados;
- Objeções formais da CONTRATANTE.

Após 15 dias sem incidentes críticos, a entrega é considerada aceita, permitindo o avanço para a próxima fase.

### 14.3 Ciclo de Validação e Correções

A cada entrega de módulo ou funcionalidade:

- **Prazo de validação:** 30 (trinta) dias úteis para testes e validação pela CONTRATANTE;
- **Notificação de erros:** Via abertura de chamado na Plataforma Unique;
- **Prazo de correção:** Máximo 5 (cinco) dias úteis para correções;
- **Reinício de ciclo:** Após correções, reinicia-se o prazo de validação (15 dias para aceite funcional).

### 14.4 Comprovação de Entrega

A CONTRATADA entregará comprovações de entrega, incluindo:

- Imagens e vídeos de demonstração;
- Emails de comunicação;
- Relatórios de testes;
- Logs de deploy;
- Documentação técnica.

---

## CLÁUSULA 15 – PRAZO DE VIGÊNCIA E RENOVAÇÃO

### 15.1 Prazo de Desenvolvimento

O prazo total para desenvolvimento, implementação e Go-live do CRM é de **12 (doze) meses** contados da assinatura do Contrato.

**Marcos principais:**
- **Mês 1-2:** Levantamento de requisitos e design arquitetural;
- **Mês 3-8:** Desenvolvimento dos módulos do CRM;
- **Mês 9:** Integração com Plataforma Unique e sistemas terceiros;
- **Mês 10-11:** Testes, homologação e ajustes;
- **Mês 12:** Go-live e transição para operação.

Atrasos causados por **demora da CONTRATANTE** na entrega de credenciais, validações ou informações prorrogarão automaticamente o prazo pelo mesmo período do atraso.

### 15.2 Vigência Mínima dos Serviços Recorrentes

Após Go-live, a CONTRATANTE compromete-se a manter os serviços recorrentes (suporte, manutenção, licença) por **mínimo de 24 (vinte e quatro) meses**.

**Renovação automática:**
- Após 24 meses, o Contrato renova-se automaticamente por **períodos iguais de 12 meses**;
- Renovação é automática, salvo **aviso de não renovação** com antecedência de **60 (sessenta) dias** antes do término.

**Cancelamento:**
- Qualquer Parte poderá cancelar com aviso de 60 dias;
- Cancelamento não afeta obrigações de handover e transição (Cláusula 16).

---

## CLÁUSULA 16 – RESCISÃO, TRANSIÇÃO E HANDOVER

### 16.1 Rescisão e Transição

Em caso de rescisão ou término do Contrato (por qualquer motivo):

- A CONTRATADA manterá a operação do CRM por até **60 (sessenta) dias** (quando solicitado pela CONTRATANTE);
- A CONTRATADA realizará **handover assistido**, transferindo conhecimento e responsabilidades;
- A CONTRATANTE poderá assumir operação do CRM ou contratar terceira parte para continuidade.

### 16.2 Checklist de Handover

A CONTRATADA entregará todos os artefatos e acessos conforme **Checklist de Handover** (Anexo F), em até **5 (cinco) dias úteis** contados do término, incluindo:

**Código e Documentação:**
- Código-fonte completo versionado em Git;
- Documentação técnica e funcional atualizada;
- Diagramas arquiteturais e de design;
- Runbooks e procedimentos operacionais;
- Testes automatizados e casos de teste.

**Infraestrutura:**
- Acesso administrativo (owner/root) a todas as contas de nuvem;
- Acesso DBA aos bancos de dados;
- Acesso aos repositórios Git;
- Acesso às ferramentas de observabilidade (logs, métricas, alertas);
- Documentação de infraestrutura (IaC, pipelines, configurações).

**Dados:**
- Dump completo do banco de dados;
- Backup de todos os dados;
- Procedimentos de backup e restauração;
- Dados exportados em formato aberto (CSV, JSON, SQL).

**Propriedade Intelectual:**
- Certificados de registro no INPI;
- Comprovantes de titularidade;
- Documentação de direitos autorais;
- Evidências de propriedade (atas notariais, registros em cartório).

**Treinamento:**
- Treinamento de operação para equipe da CONTRATANTE;
- Documentação de treinamento;
- Acesso a especialistas para dúvidas (por 30 dias após handover).

### 16.3 Eliminação de Dados

A CONTRATADA eliminará todos os dados em poder dela **após confirmação escrita da CONTRATANTE** de conclusão da portabilidade de dados. A eliminação será:

- **Completa:** Todos os dados, backups, cópias;
- **Irreversível:** Usando técnicas de destruição segura (overwrite, criptografia, destruição física);
- **Documentada:** Com certificado de destruição.

---

## CLÁUSULA 17 – PENALIDADES ESPECÍFICAS

### 17.1 Multas por Descumprimento de Obrigações Críticas

O descumprimento das seguintes obrigações sujeita a CONTRATADA a **multa não compensatória** (cumulativa com indenização por perdas e danos):

| Obrigação | Multa | Limite |
|-----------|-------|--------|
| Não disponibilizar/atualizar repositórios Git | 10% do Setup | 30% |
| Não entregar IaC e pipelines de CI/CD | 10% do Setup | 30% |
| Não conceder acessos administrativos | 10% do Setup | 30% |
| Não exportar/replicar dados (CDC) | 10% do Setup | 30% |
| Não entregar handover final conforme Checklist | 10% do Setup | 30% |

**Cálculo:** Setup = R$ 261.000,00
- 10% do Setup = R$ 26.100,00
- 30% do Setup = R$ 78.300,00

### 17.2 Multa por Não-Registro no INPI

O não protocolo do registro no INPI (e-Software) nos prazos estabelecidos na Cláusula 4.8 sujeita a CONTRATADA a:

- **Multa não compensatória:** 10% do valor do Setup por ocorrência (cada registro não realizado);
- **Limite:** 30% do valor do Setup;
- **Sem prejuízo:** De perdas e danos e demais medidas cabíveis (ação judicial, rescisão, etc.).

**Exemplo:** Não registro do MVP até 30 dias após aceite = R$ 26.100,00 de multa.

### 17.3 Aplicação de Multas

- Multas são **automaticamente aplicadas** e descontadas da próxima fatura;
- Multas **não substituem** indenização por perdas e danos;
- Multas são **cumulativas** em caso de múltiplas infrações;
- Multas **não afetam** direito de rescisão ou outras medidas legais.

---

## CLÁUSULA 18 – NÃO CONCORRÊNCIA E NÃO ALICIAMENTO

### 18.1 Restrição de Não Concorrência

Por **24 (vinte e quatro) meses** contados do término do Contrato, a CONTRATADA compromete-se a **não utilizar** código, dados confidenciais ou conhecimentos específicos da CONTRATANTE para:

- Desenvolver solução **substancialmente idêntica** ao CRM;
- Destinada a **clientes concorrentes diretos** identificados no Anexo G – Lista de Segmentos/Concorrentes;
- No **território do Brasil**.

**Definições:**
- **Substancialmente idêntica:** Mesmas funcionalidades, arquitetura similar, mesmo segmento de negócio;
- **Clientes concorrentes:** Empresas listadas no Anexo G (ex.: seguradoras de automóvel, empresas de aluguel de carros, etc.);
- **Conhecimentos específicos:** Regras de negócio, processos, integrações, otimizações desenvolvidas para a CONTRATANTE.

**Ressalva:** A restrição não impede a CONTRATADA de:

- Usar conhecimentos genéricos de engenharia de software;
- Desenvolver soluções para segmentos diferentes;
- Usar componentes genéricos em outros projetos;
- Contratar ex-funcionários da CONTRATANTE (desde que não violem confidencialidade).

### 18.2 Restrição de Não Aliciamento

Por **24 (vinte e quatro) meses** contados da assinatura do Contrato e durante sua vigência, nenhuma das Partes aliciará, direta ou indiretamente, **empregados-chave** da outra Parte envolvidos no Contrato, exceto:

- Mediante **processo seletivo público** (anúncio aberto);
- **Sem violação** de obrigações de confidencialidade ou não concorrência;
- Com **aviso prévio** de 30 dias à outra Parte.

**Definições:**
- **Empregados-chave:** Desenvolvedores, arquitetos, especialistas, gerentes de projeto envolvidos no CRM;
- **Aliciamento:** Oferta de emprego, contratação, terceirização ou contratação como PJ.

**Penalidade:** Violação de não aliciamento sujeita a Parte infratora a multa de R$ 50.000,00 por empregado aliciado, sem prejuízo de indenização por perdas e danos.

---

## CLÁUSULA 19 – CONFIDENCIALIDADE

### 19.1 Obrigação de Sigilo

As Partes mantêm **sigilo absoluto** sobre informações técnicas, comerciais, financeiras e dados fornecidos pela outra Parte, utilizando-as **exclusivamente** para execução do Contrato.

**Informações confidenciais incluem:**
- Código-fonte e arquitetura do CRM;
- Dados de clientes, transações e operações;
- Regras de negócio e processos;
- Preços, custos e estrutura financeira;
- Planos estratégicos e roadmaps;
- Credenciais e chaves de acesso.

### 19.2 Prazo de Confidencialidade

O dever de confidencialidade persiste por **mínimo de 5 (cinco) anos** após o término do Contrato.

### 19.3 Exceções

A obrigação de confidencialidade não se aplica a informações que:

- Sejam **públicas** ou se tornem públicas sem violação do Contrato;
- Sejam **conhecidas previamente** pela Parte (com comprovação);
- Sejam **independentemente desenvolvidas** (sem uso de informações confidenciais);
- Sejam **obrigatoriamente divulgadas** por lei ou ordem judicial (com notificação prévia à outra Parte).

### 19.4 Divulgação Autorizada

A CONTRATADA poderá divulgar, com **autorização prévia escrita** da CONTRATANTE:

- Existência do Contrato (ex.: em portfólio de clientes);
- Caso de uso genérico (sem dados sensíveis);
- Resultados e métricas (sem identificação de dados específicos).

---

## CLÁUSULA 20 – GARANTIAS E LIMITAÇÕES

### 20.1 Garantias da CONTRATADA

A CONTRATADA garante:

**(i) Titularidade e Não-Infração:**
- Titularidade sobre componentes genéricos e licenças;
- Não infração de direitos de terceiros;
- Direito de ceder propriedade intelectual do CRM à CONTRATANTE.

**(ii) Conformidade com Especificações:**
- CRM conforme especificações do Anexo A;
- Funcionalidades operacionais e testadas;
- Requisitos não-funcionais atendidos (desempenho, segurança, disponibilidade).

**(iii) Qualidade e Boas Práticas:**
- Código desenvolvido conforme boas práticas de engenharia;
- Testes adequados e cobertura mínima de 80%;
- Documentação técnica completa;
- Segurança conforme OWASP e SDLC.

**(iv) Suporte e Manutenção:**
- Suporte técnico conforme SLA (Cláusula 11);
- Correção de bugs e vulnerabilidades;
- Manutenção evolutiva e melhorias.

### 20.2 Limitações de Responsabilidade

Salvo em casos de dolo, culpa grave ou violação de obrigações essenciais, a responsabilidade da CONTRATADA limita-se a:

- **Danos diretos:** Valor total pago pela CONTRATANTE nos últimos 12 meses;
- **Danos indiretos:** Não indenizáveis (lucros cessantes, perda de oportunidade, danos morais).

**Exceções (responsabilidade ilimitada):**
- Violação de propriedade intelectual;
- Violação de confidencialidade;
- Violação de LGPD e privacidade;
- Morte ou lesão corporal;
- Dolo ou culpa grave.

### 20.3 Exclusão de Garantias

A CONTRATADA **não garante**:

- Funcionamento ininterrupto (uptime 100%);
- Ausência total de bugs ou vulnerabilidades;
- Compatibilidade com software de terceiros não especificado;
- Desempenho em cenários não previstos;
- Resultados comerciais ou financeiros específicos.

---

## CLÁUSULA 21 – DISPOSIÇÕES GERAIS

### 21.1 Independência das Partes

As Partes são **independentes** e não há relação de subordinação, parceria ou joint venture. Nenhuma Parte pode:

- Representar a outra Parte;
- Assumir obrigações em nome da outra Parte;
- Divulgar que são parceiras sem autorização.

### 21.2 Força Maior

Nenhuma Parte é responsável por atrasos ou inadimplência causados por **força maior** (desastres naturais, guerras, pandemias, atos governamentais), desde que:

- Notifique a outra Parte **imediatamente**;
- Demonstre o evento de força maior;
- Envidhe esforços para mitigar impacto;
- Retome execução assim que possível.

### 21.3 Integração do Contrato

Este Contrato, incluindo anexos, constitui o **acordo integral** entre as Partes, substituindo e revogando todos os acordos anteriores (verbais ou escritos) sobre o mesmo assunto.

### 21.4 Alterações

Alterações ao Contrato devem ser **formalizadas por escrito** e assinadas por ambas as Partes. Alterações verbais ou por email não são válidas.

### 21.5 Cessão

Nenhuma Parte pode **ceder direitos ou obrigações** sem consentimento escrito da outra Parte. Tentativa de cessão sem consentimento é nula.

### 21.6 Divisibilidade

Se qualquer cláusula for declarada inválida, as demais cláusulas permanecem válidas e vinculantes.

### 21.7 Aviso de Rescisão

Qualquer notificação de rescisão deve ser feita por **escrito** (email, carta registrada) com antecedência de **30 (trinta) dias**.

---

## CLÁUSULA 22 – FORO E LEI APLICÁVEL

### 22.1 Lei Aplicável

Este Contrato é regido pelas leis da **República Federativa do Brasil**, em especial:

- Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD);
- Lei nº 9.609/1998 (Lei de Proteção de Programas de Computador);
- Lei nº 9.610/1998 (Lei de Direitos Autorais);
- Código Civil Brasileiro;
- Código de Processo Civil Brasileiro.

### 22.2 Foro Competente

As Partes elegem o **Foro da Comarca de Goiânia, Estado de Goiás**, como foro competente para dirimir qualquer controvérsia decorrente deste Contrato, renunciando a qualquer outro foro, por mais privilegiado que seja.

---

## CLÁUSULA 23 – DISPOSIÇÕES FINAIS

### 23.1 Vigência

Este Contrato entra em vigor na data de assinatura e vigorará conforme Cláusula 15, salvo disposições que por sua natureza subsistem (confidencialidade, propriedade intelectual, não concorrência).

### 23.2 Assinatura

Este Contrato é assinado em **2 (duas) vias** de igual teor e forma, uma para cada Parte.

---

## ASSINATURA

**CONTRATANTE:**

MMB LTDA

CNPJ: 04.979.104/0001-40

Representante: ___________________________________

Nome: ___________________________________

Cargo: ___________________________________

Data: ___________________________________


**CONTRATADA:**

WHY CONSULTING LTDA

CNPJ: 35.759.063/0001-00

Representante: ___________________________________

Nome: ___________________________________

Cargo: ___________________________________

Data: ___________________________________

---

## ANEXOS (A a H)

*(Os anexos devem ser elaborados conforme detalhado nas referências ao longo do Contrato)*

- **Anexo A:** Especificações Técnicas, Escopo de Trabalho (SOW) e Requisitos Funcionais e Não-Funcionais
- **Anexo B:** Especificações de Integrações e Interoperabilidade
- **Anexo C:** Requisitos de Segurança da Informação e Ciclo de Vida de Desenvolvimento Seguro (SDLC)
- **Anexo D:** Tabela de Créditos de Serviço (SLA)
- **Anexo E:** Tabela de Preços, Parcelas e Condições de Pagamento
- **Anexo F:** Checklist de Handover e Transição
- **Anexo G:** Lista de Segmentos e Concorrentes (para fins de Não-Concorrência)
- **Anexo H:** Procedimentos de Registro de Propriedade Intelectual e Provas de Titularidade

---

**FIM DO CONTRATO**
