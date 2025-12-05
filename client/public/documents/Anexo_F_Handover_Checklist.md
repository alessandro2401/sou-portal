# ANEXO F – CHECKLIST DE HANDOVER E TRANSIÇÃO

## CONTRATO DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SUPORTE
### MMB LTDA × WHY CONSULTING LTDA

---

## 1. INTRODUÇÃO

Este Anexo fornece checklist detalhado de todos os artefatos, acessos, documentação e procedimentos que devem ser entregues pela CONTRATADA à CONTRATANTE no momento do handover (transição) do CRM.

O handover deve ser concluído em até **5 (cinco) dias úteis** após término do Contrato ou Go-live, conforme Cláusula 16 do Contrato Mestre.

---

## 2. CÓDIGO E REPOSITÓRIOS

### 2.1 Código-Fonte

- [ ] **Código-fonte completo** do CRM em repositório Git
  - [ ] Todos os branches (main, develop, release, feature) entregues
  - [ ] Histórico completo de commits preservado
  - [ ] Tags de versão criadas para cada release (v1.0.0, v1.1.0, etc.)
  - [ ] Arquivo README.md com instruções de setup
  - [ ] Arquivo .gitignore configurado corretamente
  - [ ] Arquivo LICENSE com licença de código aberto (se aplicável)

- [ ] **Código compilado/build artifacts**
  - [ ] Executáveis ou binários compilados
  - [ ] Docker images criadas e testadas
  - [ ] Artefatos de build armazenados em repositório de artefatos (Artifactory, Nexus, etc.)

- [ ] **Acesso ao repositório Git**
  - [ ] CONTRATANTE tem acesso owner/admin ao repositório
  - [ ] Chaves SSH/HTTPS configuradas para CONTRATANTE
  - [ ] Permissões de push/merge/delete configuradas
  - [ ] Backup do repositório realizado em local seguro

### 2.2 Código de Infraestrutura (IaC)

- [ ] **Infrastructure as Code (IaC)**
  - [ ] Arquivos Terraform/CloudFormation/Ansible completos
  - [ ] Variáveis de ambiente documentadas
  - [ ] Segredos removidos (usar variáveis de ambiente)
  - [ ] Documentação de como aplicar IaC
  - [ ] Scripts de provisioning de ambientes DEV, HML, PRD

- [ ] **Pipelines de CI/CD**
  - [ ] Arquivos de configuração (GitHub Actions, GitLab CI, Jenkins, etc.)
  - [ ] Documentação de pipeline
  - [ ] Acesso à plataforma de CI/CD (CONTRATANTE é owner)
  - [ ] Histórico de execuções preservado

- [ ] **Docker e Containerização**
  - [ ] Dockerfiles para cada serviço
  - [ ] Docker Compose ou Kubernetes manifests
  - [ ] Docker images publicadas em registry (Docker Hub, ECR, etc.)
  - [ ] Documentação de como executar containers

---

## 3. DOCUMENTAÇÃO TÉCNICA

### 3.1 Arquitetura e Design

- [ ] **Diagrama de Arquitetura**
  - [ ] Diagrama C4 (Context, Container, Component, Code)
  - [ ] Diagrama de fluxo de dados
  - [ ] Diagrama de sequência (principais fluxos)
  - [ ] Diagrama de entidade-relacionamento (ER)
  - [ ] Formato: PNG, SVG ou Visio

- [ ] **Architecture Decision Records (ADRs)**
  - [ ] ADRs documentando decisões de design
  - [ ] Formato: Markdown em diretório /docs/adr
  - [ ] Mínimo 10 ADRs cobrindo decisões principais

- [ ] **Especificação de API**
  - [ ] Swagger/OpenAPI specification (YAML/JSON)
  - [ ] Documentação de endpoints (GET, POST, PUT, DELETE)
  - [ ] Parâmetros, request/response examples
  - [ ] Códigos de erro e tratamento
  - [ ] Autenticação e autorização

### 3.2 Documentação Funcional

- [ ] **Manual de Usuário**
  - [ ] Guia passo-a-passo para cada módulo
  - [ ] Screenshots e vídeos de demonstração
  - [ ] Casos de uso principais
  - [ ] FAQ (Frequently Asked Questions)
  - [ ] Formato: PDF e/ou HTML

- [ ] **Guia de Operação**
  - [ ] Como iniciar/parar o CRM
  - [ ] Como escalar recursos
  - [ ] Como executar backup/restore
  - [ ] Como monitorar saúde do sistema
  - [ ] Como responder a incidentes

- [ ] **Procedimentos Operacionais**
  - [ ] Runbook de operação diária
  - [ ] Procedimento de deploy
  - [ ] Procedimento de rollback
  - [ ] Procedimento de escalabilidade
  - [ ] Procedimento de disaster recovery

### 3.3 Documentação de Configuração

- [ ] **Variáveis de Ambiente**
  - [ ] Arquivo .env.example com todas as variáveis
  - [ ] Descrição de cada variável
  - [ ] Valores padrão
  - [ ] Valores de produção (sem segredos)

- [ ] **Configuração de Banco de Dados**
  - [ ] Schema SQL (DDL)
  - [ ] Índices criados
  - [ ] Stored procedures (se aplicável)
  - [ ] Views criadas
  - [ ] Triggers (se aplicável)

- [ ] **Configuração de Infraestrutura**
  - [ ] Configuração de firewall
  - [ ] Configuração de load balancer
  - [ ] Configuração de WAF
  - [ ] Configuração de CDN
  - [ ] Configuração de DNS

---

## 4. TESTES E QUALIDADE

### 4.1 Testes Automatizados

- [ ] **Testes Unitários**
  - [ ] Código de testes em repositório
  - [ ] Cobertura mínima de 80%
  - [ ] Relatório de cobertura
  - [ ] Todos os testes passando

- [ ] **Testes de Integração**
  - [ ] Testes de integração entre módulos
  - [ ] Testes de integração com APIs externas
  - [ ] Todos os testes passando

- [ ] **Testes de Aceitação (UAT)**
  - [ ] Casos de teste de aceitação
  - [ ] Evidência de execução de testes
  - [ ] Resultados: passou/falhou
  - [ ] Bugs identificados e corrigidos

- [ ] **Testes de Performance**
  - [ ] Testes de carga (1.000 usuários simultâneos)
  - [ ] Testes de stress
  - [ ] Relatório de performance
  - [ ] Métricas: tempo de resposta, throughput, CPU, memória

### 4.2 Relatórios de Qualidade

- [ ] **Cobertura de Código**
  - [ ] Relatório de cobertura de testes
  - [ ] Cobertura por módulo
  - [ ] Áreas com baixa cobertura identificadas

- [ ] **Análise Estática (SAST)**
  - [ ] Relatório SAST
  - [ ] Vulnerabilidades identificadas e corrigidas
  - [ ] Zero vulnerabilidades críticas

- [ ] **Análise Dinâmica (DAST)**
  - [ ] Relatório DAST
  - [ ] Vulnerabilidades identificadas e corrigidas
  - [ ] Zero vulnerabilidades críticas

- [ ] **Análise de Composição (SCA)**
  - [ ] Relatório SCA
  - [ ] Dependências desatualizadas identificadas
  - [ ] CVEs conhecidas tratadas
  - [ ] SBOM (Software Bill of Materials) gerado

---

## 5. SEGURANÇA E CONFORMIDADE

### 5.1 Certificados e Chaves

- [ ] **Certificados SSL/TLS**
  - [ ] Certificados válidos para todos os domínios
  - [ ] Certificados armazenados em local seguro
  - [ ] Procedimento de renovação documentado
  - [ ] Data de expiração registrada

- [ ] **Chaves de Criptografia**
  - [ ] Chaves de criptografia armazenadas em cofre seguro
  - [ ] Procedimento de rotação de chaves documentado
  - [ ] Backup de chaves em local seguro
  - [ ] Acesso restrito a chaves

### 5.2 Segredos e Credenciais

- [ ] **Gestão de Segredos**
  - [ ] Todos os segredos removidos de código
  - [ ] Segredos armazenados em cofre seguro (AWS Secrets Manager, etc.)
  - [ ] Acesso a segredos auditado
  - [ ] Procedimento de rotação de segredos documentado

- [ ] **Credenciais de Terceiros**
  - [ ] Credenciais de APIs de terceiros documentadas
  - [ ] Credenciais armazenadas em cofre seguro
  - [ ] Procedimento de atualização de credenciais

### 5.3 Conformidade

- [ ] **LGPD (Lei Geral de Proteção de Dados)**
  - [ ] Política de privacidade documentada
  - [ ] Consentimento de coleta de dados implementado
  - [ ] Direitos de acesso, correção, exclusão, portabilidade implementados
  - [ ] Procedimento de notificação de incidente de segurança

- [ ] **Segurança de Informação**
  - [ ] Plano de segurança de software
  - [ ] Threat model documentado
  - [ ] Plano de resposta a incidentes
  - [ ] Política de backup e disaster recovery

---

## 6. INFRAESTRUTURA E ACESSO

### 6.1 Contas de Nuvem

- [ ] **Acesso a Contas de Nuvem**
  - [ ] CONTRATANTE tem acesso owner/admin a contas de nuvem
  - [ ] Credenciais de acesso entregues com segurança
  - [ ] MFA (Multi-Factor Authentication) habilitado
  - [ ] Acesso da CONTRATADA revogado (ou reduzido a mínimo)

- [ ] **Ambientes de Nuvem**
  - [ ] Ambiente DEV provisionado e acessível
  - [ ] Ambiente HML provisionado e acessível
  - [ ] Ambiente PRD provisionado e acessível
  - [ ] Documentação de configuração de cada ambiente

### 6.2 Banco de Dados

- [ ] **Acesso ao Banco de Dados**
  - [ ] CONTRATANTE tem acesso DBA (Database Administrator)
  - [ ] Credenciais de DBA entregues com segurança
  - [ ] Acesso da CONTRATADA reduzido a mínimo necessário

- [ ] **Backup e Restore**
  - [ ] Backup completo do banco de dados realizado
  - [ ] Dump SQL entregue
  - [ ] Procedimento de restore testado e documentado
  - [ ] Backup armazenado em local seguro

- [ ] **Replicação de Dados**
  - [ ] CDC (Change Data Capture) configurado
  - [ ] Replicação para DW/Data Lake funcionando
  - [ ] Latência de replicação monitorada
  - [ ] Procedimento de sincronização documentado

### 6.3 Repositórios de Código

- [ ] **Acesso ao Repositório Git**
  - [ ] CONTRATANTE tem acesso owner/admin
  - [ ] Chaves SSH/HTTPS configuradas
  - [ ] Acesso da CONTRATADA revogado (ou reduzido)
  - [ ] Backup do repositório realizado

- [ ] **Repositório de Artefatos**
  - [ ] Acesso a Docker registry ou Artifactory
  - [ ] Imagens Docker armazenadas
  - [ ] Acesso documentado

### 6.4 Ferramentas de Monitoramento

- [ ] **Acesso a Ferramentas de Monitoramento**
  - [ ] CONTRATANTE tem acesso admin a CloudWatch, Datadog, etc.
  - [ ] Dashboards configurados
  - [ ] Alertas configurados
  - [ ] Logs centralizados e acessíveis

- [ ] **Observabilidade**
  - [ ] Métricas coletadas e armazenadas
  - [ ] Logs centralizados (ELK, Splunk, etc.)
  - [ ] Traces distribuídos (APM)
  - [ ] Retenção mínima de 365 dias

---

## 7. DADOS E PORTABILIDADE

### 7.1 Exportação de Dados

- [ ] **Dump Completo do Banco de Dados**
  - [ ] Dump SQL completo realizado
  - [ ] Arquivo entregue em formato SQL
  - [ ] Tamanho do arquivo documentado
  - [ ] Checksum/hash do arquivo para verificação

- [ ] **Exportação em Formatos Abertos**
  - [ ] Dados exportados em CSV
  - [ ] Dados exportados em JSON
  - [ ] Dados exportados em Parquet (se aplicável)
  - [ ] Documentação de estrutura de dados

- [ ] **Dados da Plataforma Unique**
  - [ ] Dados exportados em formato aberto
  - [ ] CDC/replicação funcionando
  - [ ] Acesso a repositório de dados (DW/Data Lake)

### 7.2 Procedimentos de Migração

- [ ] **Plano de Migração**
  - [ ] Plano de migração de dados documentado
  - [ ] Procedimento de validação de dados
  - [ ] Procedimento de rollback
  - [ ] Teste de migração realizado

- [ ] **Documentação de Portabilidade**
  - [ ] Guia de migração para outro sistema
  - [ ] Mapeamento de dados
  - [ ] Scripts de migração (se aplicável)
  - [ ] Contato de suporte para migração

---

## 8. PROPRIEDADE INTELECTUAL

### 8.1 Registro de Propriedade Intelectual

- [ ] **Registro no INPI (e-Software)**
  - [ ] Número do processo de registro
  - [ ] Certificado de registro (quando emitido)
  - [ ] Comprovante de pagamento de taxas
  - [ ] Titularidade em nome da CONTRATANTE

- [ ] **Provas de Titularidade**
  - [ ] Ata notarial (se realizada)
  - [ ] Registro em cartório (se realizado)
  - [ ] Documentação de cessão de direitos
  - [ ] Declaração de originalidade

### 8.2 Licenças e Componentes

- [ ] **Software Bill of Materials (SBOM)**
  - [ ] SBOM completo gerado
  - [ ] Todas as dependências listadas
  - [ ] Licenças de cada dependência identificadas
  - [ ] CVEs conhecidas identificadas

- [ ] **Licenças de Terceiros**
  - [ ] Licenças de componentes genéricos documentadas
  - [ ] Licenças compatíveis com uso comercial
  - [ ] Nenhuma licença copyleft forte (GPLv3, AGPL) sem autorização

---

## 9. TREINAMENTO E SUPORTE

### 9.1 Treinamento de Usuários

- [ ] **Treinamento Realizado**
  - [ ] Treinamento de 40 horas concluído
  - [ ] Lista de participantes
  - [ ] Material de treinamento entregue
  - [ ] Certificado de conclusão emitido

- [ ] **Material de Treinamento**
  - [ ] Slides de apresentação
  - [ ] Vídeos de demonstração
  - [ ] Guias passo-a-passo
  - [ ] FAQ e troubleshooting

### 9.2 Suporte Pós-Handover

- [ ] **Período de Suporte Estendido**
  - [ ] Suporte técnico por 30 dias após handover
  - [ ] Contato de escalação disponível
  - [ ] Tempo de resposta definido
  - [ ] Documentação de suporte entregue

- [ ] **Conhecimento Transfer**
  - [ ] Sessões de Q&A com equipe técnica
  - [ ] Documentação de troubleshooting
  - [ ] Contatos de especialistas
  - [ ] Procedimento de escalação

---

## 10. DOCUMENTAÇÃO FINAL

### 10.1 Checklist de Entrega

- [ ] **Checklist Assinado**
  - [ ] Checklist de handover preenchido
  - [ ] Todos os itens marcados como concluído
  - [ ] Assinado por CONTRATANTE e CONTRATADA
  - [ ] Data de conclusão registrada

### 10.2 Relatório Final

- [ ] **Relatório de Handover**
  - [ ] Resumo de entregas
  - [ ] Status de cada item do checklist
  - [ ] Problemas identificados e resolvidos
  - [ ] Recomendações para próximas fases

### 10.3 Documentação de Referência

- [ ] **Índice de Documentação**
  - [ ] Índice completo de toda documentação
  - [ ] Localização de cada documento
  - [ ] Versão e data de atualização
  - [ ] Contato para dúvidas

---

## 11. VALIDAÇÃO E ACEITE

### 11.1 Validação de Entrega

A CONTRATANTE validará cada item do checklist e marcará como:
- **✓ Completo:** Item entregue e validado
- **✗ Incompleto:** Item não entregue ou com deficiências
- **~ Parcial:** Item parcialmente entregue

### 11.2 Aceite Final

O handover é considerado **completo** quando:
- Todos os itens do checklist estão marcados como "✓ Completo"
- CONTRATANTE assina o checklist
- Relatório final é aceito
- Período de 5 dias úteis é respeitado

### 11.3 Discrepâncias

Se houver itens incompletos ou com deficiências:
- CONTRATANTE notifica CONTRATADA
- CONTRATADA tem até 5 dias úteis para corrigir
- Novo checklist é preenchido
- Aceite final é formalizado

---

## 12. ASSINATURA E APROVAÇÃO

**CONTRATANTE:**

Nome: ___________________________

Cargo: ___________________________

Assinatura: ___________________________

Data: _____/_____/_____


**CONTRATADA:**

Nome: ___________________________

Cargo: ___________________________

Assinatura: ___________________________

Data: _____/_____/_____

---

## 13. OBSERVAÇÕES FINAIS

Este checklist é documento vivo e pode ser atualizado conforme necessidade. Qualquer alteração deve ser formalizada por escrito e assinada por ambas as Partes.

---

**FIM DO ANEXO F**
