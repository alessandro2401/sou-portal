# ANEXO C – REQUISITOS DE SEGURANÇA DA INFORMAÇÃO E CICLO DE VIDA DE DESENVOLVIMENTO SEGURO (SDLC)

## CONTRATO DE DESENVOLVIMENTO DE SOFTWARE, LICENCIAMENTO E SUPORTE
### MMB LTDA × WHY CONSULTING LTDA

---

## 1. INTRODUÇÃO

Este Anexo detalha os requisitos de segurança, padrões de desenvolvimento seguro e procedimentos de teste de segurança que a CONTRATADA deve observar durante o desenvolvimento e operação do CRM.

---

## 2. CONFORMIDADE COM PADRÕES DE SEGURANÇA

### 2.1 OWASP Top 10 2021

A CONTRATADA implementará controles contra as 10 vulnerabilidades mais críticas identificadas pelo OWASP:

| # | Vulnerabilidade | Controle |
|---|-----------------|----------|
| 1 | Broken Access Control | RBAC, validação de permissões, testes de autorização |
| 2 | Cryptographic Failures | Criptografia AES-256, TLS 1.2+, hash seguro (bcrypt) |
| 3 | Injection | Input validation, prepared statements, parameterized queries |
| 4 | Insecure Design | Threat modeling, secure design review, STRIDE |
| 5 | Security Misconfiguration | Hardening, default credentials removal, security headers |
| 6 | Vulnerable Components | Dependency scanning (SCA), SBOM, atualização de patches |
| 7 | Authentication Failures | MFA, password policy, session management seguro |
| 8 | Data Integrity Failures | Validação de dados, assinatura digital, integridade de mensagens |
| 9 | Logging & Monitoring Failures | Logging centralizado, alertas, auditoria |
| 10 | SSRF | Validação de URLs, whitelist de domínios, network segmentation |

### 2.2 NIST Secure Software Development Framework (SSDF)

A CONTRATADA adotará práticas alinhadas com NIST SSDF v1.1:

#### **PO (Preparation and Organization)**
- **PO1.1:** Estabelecer política de segurança de software;
- **PO1.2:** Documentar ciclo de vida de desenvolvimento;
- **PO1.3:** Identificar e comunicar responsabilidades de segurança;
- **PO1.4:** Treinar equipe em desenvolvimento seguro.

#### **PS (Protective Software)**
- **PS1.1:** Identificar requisitos de segurança;
- **PS1.2:** Revisar design para segurança;
- **PS1.3:** Implementar controles de segurança;
- **PS1.4:** Usar componentes seguros e atualizados.

#### **PO (Protective Operations)**
- **PO1.1:** Proteger código-fonte e artefatos;
- **PO1.2:** Usar ferramentas de análise de segurança;
- **PO1.3:** Revisar código para vulnerabilidades;
- **PO1.4:** Testar segurança antes de release.

#### **PO (Process Oversight)**
- **PO1.1:** Monitorar conformidade com política;
- **PO1.2:** Auditar processo de desenvolvimento;
- **PO1.3:** Corrigir vulnerabilidades identificadas;
- **PO1.4:** Comunicar incidentes de segurança.

### 2.3 LGPD (Lei Geral de Proteção de Dados)

A CONTRATADA implementará controles de privacidade conforme LGPD:

- **Consentimento:** Obter consentimento explícito para coleta de dados pessoais;
- **Transparência:** Informar finalidade e uso de dados;
- **Segurança:** Proteger dados contra acesso não autorizado;
- **Direitos do Titular:** Implementar direitos de acesso, correção, exclusão, portabilidade;
- **Notificação:** Comunicar incidentes de segurança em até 48h;
- **DPO:** Designar Data Protection Officer (DPO) para conformidade.

---

## 3. CICLO DE VIDA DE DESENVOLVIMENTO SEGURO (SDLC)

### 3.1 Fase 1: Planejamento e Requisitos

**Atividades:**
- Identificar requisitos de segurança;
- Realizar threat modeling (STRIDE, PASTA);
- Documentar cenários de ataque;
- Definir critérios de aceite de segurança;
- Treinar equipe em segurança.

**Entregáveis:**
- Documento de requisitos de segurança;
- Threat model;
- Plano de testes de segurança;
- Matriz de rastreabilidade de requisitos.

**Responsável:** CONTRATADA (com validação de CONTRATANTE)

### 3.2 Fase 2: Design Arquitetural

**Atividades:**
- Revisar design para segurança;
- Identificar pontos de falha;
- Implementar controles de segurança no design;
- Documentar decisões de segurança (ADRs);
- Revisar componentes de terceiros.

**Entregáveis:**
- Diagrama de arquitetura com controles de segurança;
- ADRs de decisões de segurança;
- Matriz de componentes de terceiros;
- Plano de integração segura.

**Responsável:** CONTRATADA (com revisão de CONTRATANTE)

### 3.3 Fase 3: Implementação

**Atividades:**
- Codificar conforme padrões de segurança;
- Revisar código para vulnerabilidades (peer review);
- Usar ferramentas de análise estática (SAST);
- Implementar logging e monitoramento;
- Manter segredos em cofre seguro.

**Entregáveis:**
- Código-fonte com controles de segurança;
- Logs de code review;
- Relatórios SAST;
- Documentação de implementação.

**Responsável:** CONTRATADA

### 3.4 Fase 4: Testes de Segurança

**Atividades:**
- Testes unitários de segurança;
- Testes de integração de segurança;
- Testes dinâmicos (DAST);
- Testes de penetração;
- Análise de composição (SCA);
- Testes de criptografia.

**Entregáveis:**
- Relatórios de testes de segurança;
- Plano de remediação de vulnerabilidades;
- Evidências de testes;
- Certificado de teste de segurança.

**Responsável:** CONTRATADA (com validação de CONTRATANTE)

### 3.5 Fase 5: Liberação e Deployment

**Atividades:**
- Revisar checklist de segurança;
- Validar correção de vulnerabilidades críticas;
- Realizar teste de aceitação de segurança;
- Documentar configuração de segurança;
- Treinar equipe de operação.

**Entregáveis:**
- Checklist de liberação de segurança;
- Guia de hardening;
- Plano de resposta a incidentes;
- Documentação de operação segura.

**Responsável:** CONTRATADA (com aprovação de CONTRATANTE)

### 3.6 Fase 6: Operação e Manutenção

**Atividades:**
- Monitorar segurança em produção;
- Aplicar patches de segurança;
- Responder a incidentes de segurança;
- Realizar auditorias de segurança;
- Atualizar documentação de segurança.

**Entregáveis:**
- Logs de monitoramento;
- Relatórios de incidentes;
- Registros de patches aplicados;
- Relatórios de auditoria.

**Responsável:** CONTRATADA

---

## 4. TESTES DE SEGURANÇA

### 4.1 Testes de Análise Estática (SAST)

**Objetivo:** Identificar vulnerabilidades no código-fonte sem executá-lo.

**Ferramentas Recomendadas:**
- SonarQube, Checkmarx, Fortify, Veracode;
- Linguagem-específicas: ESLint (JavaScript), Pylint (Python), SpotBugs (Java).

**Frequência:** A cada commit (CI/CD pipeline)

**Critérios de Aceite:**
- Zero vulnerabilidades críticas (Sev.1);
- Máximo 5 vulnerabilidades altas (Sev.2);
- Máximo 20 vulnerabilidades médias (Sev.3).

**Exemplo de Relatório SAST:**
```
Vulnerabilidades Encontradas:
- SQL Injection: 2 (Sev.1)
- XSS: 3 (Sev.2)
- Insecure Deserialization: 1 (Sev.1)
- Hardcoded Secrets: 5 (Sev.2)
- Weak Cryptography: 2 (Sev.2)

Total: 13 vulnerabilidades
Críticas: 2
Altas: 8
Médias: 3
```

### 4.2 Testes de Análise Dinâmica (DAST)

**Objetivo:** Identificar vulnerabilidades testando aplicação em execução.

**Ferramentas Recomendadas:**
- OWASP ZAP, Burp Suite, Acunetix, Rapid7 InsightAppSec.

**Frequência:** Semanal em ambiente de teste; mensalmente em produção

**Escopo:**
- Testes de autenticação e autorização;
- Testes de injeção (SQL, XSS, LDAP);
- Testes de CSRF;
- Testes de XXE;
- Testes de insecure deserialization;
- Testes de broken access control;
- Testes de security misconfiguration.

**Critérios de Aceite:**
- Zero vulnerabilidades críticas;
- Máximo 3 vulnerabilidades altas;
- Máximo 10 vulnerabilidades médias.

### 4.3 Análise de Composição de Software (SCA)

**Objetivo:** Identificar vulnerabilidades em dependências de terceiros.

**Ferramentas Recomendadas:**
- Snyk, Dependabot, WhiteSource, Black Duck.

**Frequência:** Diária (CI/CD pipeline)

**Escopo:**
- Identificar dependências desatualizadas;
- Identificar CVEs conhecidas;
- Verificar licenças de código aberto;
- Gerar SBOM (Software Bill of Materials).

**Critérios de Aceite:**
- Zero dependências com CVEs críticas;
- Máximo 5 dependências com CVEs altas;
- Atualização de dependências dentro de 30 dias.

**Exemplo de SBOM:**
```
Software Bill of Materials (SBOM)
Versão: 1.0.0
Data: 2024-01-01

Dependências:
- express: 4.18.2 (MIT)
- lodash: 4.17.21 (MIT)
- jsonwebtoken: 9.0.0 (MIT)
- pg: 8.10.0 (MIT)
- redis: 4.6.5 (ISC)
- axios: 1.6.0 (MIT)

CVEs Identificadas:
- express: 0 críticas, 0 altas
- lodash: 0 críticas, 1 alta (CVE-2021-23337)
- jsonwebtoken: 0 críticas, 0 altas
- pg: 0 críticas, 0 altas
- redis: 0 críticas, 0 altas
- axios: 0 críticas, 0 altas

Total de CVEs: 1 alta
```

### 4.4 Testes de Penetração

**Objetivo:** Simular ataque de hacker para identificar vulnerabilidades exploráveis.

**Frequência:** Trimestralmente; antes de go-live

**Escopo:**
- Teste de autenticação e autorização;
- Teste de injeção SQL;
- Teste de XSS;
- Teste de CSRF;
- Teste de escalação de privilégio;
- Teste de insecure direct object references;
- Teste de broken session management.

**Entregáveis:**
- Relatório de teste de penetração;
- Evidências de vulnerabilidades exploradas;
- Plano de remediação;
- Certificado de teste.

**Responsável:** Terceira parte especializada (recomendado)

### 4.5 Testes de Criptografia

**Objetivo:** Validar implementação correta de criptografia.

**Testes:**
- Validar algoritmos de criptografia (AES-256, TLS 1.2+);
- Validar tamanho de chave (mínimo 256 bits);
- Validar geração de chaves (aleatória, segura);
- Validar armazenamento de chaves (cofre seguro);
- Validar rotação de chaves (periódica);
- Validar hash de senha (bcrypt, scrypt, argon2).

**Critérios de Aceite:**
- Algoritmos aprovados (NIST);
- Tamanho de chave adequado;
- Implementação correta conforme padrão.

---

## 5. CONTROLES DE SEGURANÇA

### 5.1 Autenticação

**Requisitos:**
- Suporte a múltiplos métodos: username/password, OAuth 2.0, SAML, MFA;
- Autenticação multifator (MFA): TOTP (Google Authenticator), SMS, email;
- Política de senha: mínimo 12 caracteres, complexidade, expiração;
- Bloqueio de conta após 5 tentativas falhas;
- Logout automático após inatividade (30 minutos);
- Histórico de login com timestamp e IP.

**Implementação:**
- Usar biblioteca estabelecida (Passport.js, Spring Security, Django Auth);
- Nunca armazenar senha em texto plano;
- Hash de senha com bcrypt (rounds ≥ 12), scrypt ou argon2;
- Validação de token JWT com assinatura;
- Refresh token com expiração.

### 5.2 Autorização (RBAC)

**Requisitos:**
- Controle de acesso baseado em papéis (RBAC);
- Papéis: Admin, Gerente, Vendedor, Agente, Vistoriador, Cliente;
- Permissões granulares por módulo e ação;
- Validação de permissão em cada requisição;
- Auditoria de acesso negado;
- Princípio do menor privilégio.

**Implementação:**
- Matriz de permissões (Role-Permission Matrix);
- Middleware de autorização em cada endpoint;
- Validação no backend (nunca confiar no frontend);
- Logs de acesso negado.

### 5.3 Criptografia

**Em Trânsito:**
- HTTPS (TLS 1.2+) para todas as comunicações;
- Certificados SSL válidos e atualizados;
- Cipher suites fortes (ex.: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384);
- HSTS (HTTP Strict Transport Security) habilitado.

**Em Repouso:**
- Dados sensíveis criptografados com AES-256;
- Chaves de criptografia armazenadas em cofre seguro (AWS KMS, Azure Key Vault);
- Rotação de chaves a cada 90 dias;
- Backup de chaves em local seguro.

**Senhas:**
- Hash com bcrypt (rounds ≥ 12), scrypt ou argon2;
- Salt aleatório por senha;
- Nunca armazenar senha em texto plano;
- Nunca usar MD5 ou SHA1.

### 5.4 Validação de Entrada

**Requisitos:**
- Validar todos os inputs (frontend e backend);
- Whitelist de caracteres permitidos;
- Limite de tamanho de entrada;
- Rejeitar inputs malformados;
- Sanitizar inputs para prevenir injeção.

**Implementação:**
- Validação no backend (nunca confiar no frontend);
- Prepared statements para queries SQL;
- Parameterized queries;
- Escape de caracteres especiais;
- Content Security Policy (CSP).

### 5.5 Logging e Monitoramento

**Requisitos:**
- Registrar todos os eventos de segurança;
- Incluir timestamp, usuário, IP, ação, resultado;
- Retenção mínima de 1 ano;
- Logs centralizados e imutáveis;
- Alertas automáticos para eventos suspeitos;
- Conformidade com LGPD.

**Eventos a Registrar:**
- Login bem-sucedido e falho;
- Acesso negado;
- Alteração de dados sensíveis;
- Criação/exclusão de usuário;
- Alteração de permissão;
- Acesso a dados pessoais;
- Erro de segurança;
- Tentativa de ataque.

**Exemplo de Log:**
```
2024-01-01T10:30:00Z | INFO | LOGIN_SUCCESS | user_id=123 | ip=192.168.1.1 | device=Chrome/Windows
2024-01-01T10:35:00Z | WARN | ACCESS_DENIED | user_id=123 | resource=admin_panel | ip=192.168.1.1
2024-01-01T10:40:00Z | ERROR | SQL_INJECTION_ATTEMPT | ip=192.168.1.100 | payload='; DROP TABLE users--
2024-01-01T10:45:00Z | CRITICAL | UNAUTHORIZED_DATA_ACCESS | user_id=456 | data=customer_ssn | ip=192.168.1.50
```

### 5.6 Gestão de Segredos

**Requisitos:**
- Armazenar segredos em cofre seguro (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault);
- Nunca armazenar segredos em código ou repositório;
- Nunca compartilhar segredos por email ou chat;
- Rotação periódica de segredos (a cada 90 dias);
- Auditoria de acesso a segredos;
- Revogação de segredos em caso de vazamento.

**Segredos a Proteger:**
- Chaves de API;
- Credenciais de banco de dados;
- Chaves de criptografia;
- Tokens de autenticação;
- Certificados SSL;
- Chaves privadas.

### 5.7 Segurança de Infraestrutura

**Requisitos:**
- Firewall configurado (inbound/outbound);
- Network segmentation (DMZ, private networks);
- WAF (Web Application Firewall) habilitado;
- DDoS protection;
- VPN para acesso remoto;
- Hardening de servidores (remover serviços desnecessários);
- Patches de segurança aplicados regularmente;
- Antivírus/Antimalware em servidores;
- Backup seguro e testado.

---

## 6. RESPOSTA A INCIDENTES DE SEGURANÇA

### 6.1 Plano de Resposta

**Objetivo:** Responder rapidamente a incidentes de segurança para minimizar dano.

**Fases:**
1. **Detecção:** Identificar incidente de segurança;
2. **Análise:** Determinar escopo e impacto;
3. **Contenção:** Isolar sistema afetado;
4. **Erradicação:** Remover causa raiz;
5. **Recuperação:** Restaurar sistema normal;
6. **Comunicação:** Notificar CONTRATANTE e ANPD (se necessário);
7. **Lições Aprendidas:** Melhorar processo.

### 6.2 Tempo de Resposta

| Severidade | Detecção | Análise | Contenção | Erradicação | Comunicação |
|-----------|----------|--------|-----------|-------------|------------|
| Sev.1 (Crítica) | < 1h | < 4h | < 24h | < 72h | < 48h |
| Sev.2 (Alta) | < 4h | < 8h | < 48h | < 5 dias | < 72h |
| Sev.3 (Média) | < 1 dia | < 2 dias | < 5 dias | < 10 dias | < 5 dias |

### 6.3 Comunicação de Incidente

A CONTRATADA notificará CONTRATANTE em até 48 horas com:
- Descrição do incidente;
- Data/hora de ocorrência;
- Dados afetados;
- Número de pessoas afetadas;
- Ações tomadas;
- Plano de remediação;
- Contato de escalação.

---

## 7. TREINAMENTO EM SEGURANÇA

### 7.1 Treinamento Inicial

Todos os membros da equipe de desenvolvimento receberão treinamento em:
- Segurança de software (OWASP Top 10);
- Desenvolvimento seguro (SDLC);
- Testes de segurança;
- Conformidade com LGPD;
- Resposta a incidentes;
- Phishing e social engineering.

**Frequência:** Anualmente (mínimo 8 horas)

### 7.2 Treinamento Contínuo

- Atualização sobre novas vulnerabilidades;
- Sessões de code review focadas em segurança;
- Simulados de incidente de segurança;
- Certificações de segurança (OSCP, CEH, CISSP).

---

## 8. AUDITORIA E CONFORMIDADE

### 8.1 Auditoria Interna

A CONTRATADA realizará auditoria interna de segurança:
- **Frequência:** Trimestralmente;
- **Escopo:** Código, infraestrutura, processos;
- **Responsável:** Equipe de segurança interna;
- **Entregáveis:** Relatório de auditoria, plano de ação.

### 8.2 Auditoria Externa

A CONTRATANTE poderá solicitar auditoria externa de segurança:
- **Frequência:** Anualmente (mínimo);
- **Escopo:** Código, infraestrutura, processos;
- **Responsável:** Terceira parte especializada;
- **Entregáveis:** Relatório de auditoria, certificado.

### 8.3 Conformidade com Regulamentações

A CONTRATADA garantirá conformidade com:
- LGPD (Lei Geral de Proteção de Dados);
- PCI DSS (se processar dados de cartão);
- ISO 27001 (recomendado);
- Regulamentações setoriais (se aplicável).

---

## 9. DOCUMENTAÇÃO DE SEGURANÇA

### 9.1 Documentos Obrigatórios

- Política de segurança de software;
- Plano de testes de segurança;
- Threat model;
- Plano de resposta a incidentes;
- Guia de hardening;
- Documentação de controles de segurança;
- Relatórios de testes de segurança;
- Logs de auditoria.

### 9.2 Atualização de Documentação

- Documentação atualizada a cada release;
- Versionamento de documentos;
- Histórico de alterações;
- Aprovação por CONTRATANTE.

---

## 10. RESPONSABILIDADES

### 10.1 Responsabilidades da CONTRATADA

- Implementar controles de segurança conforme especificações;
- Realizar testes de segurança (SAST, DAST, SCA, penetração);
- Manter documentação de segurança atualizada;
- Responder a incidentes de segurança;
- Aplicar patches de segurança;
- Treinar equipe em segurança;
- Conformidade com LGPD e regulamentações;
- Suporte técnico para questões de segurança.

### 10.2 Responsabilidades da CONTRATANTE

- Validar requisitos de segurança;
- Revisar relatórios de testes de segurança;
- Aprovar plano de remediação;
- Fornecer ambiente seguro de teste;
- Comunicar alterações de requisitos de segurança;
- Participar de auditoria de segurança.

---

**Aprovação:**

**CONTRATANTE:** _____________________________ Data: _____/_____/_____

**CONTRATADA:** _____________________________ Data: _____/_____/_____

---

**FIM DO ANEXO C**
