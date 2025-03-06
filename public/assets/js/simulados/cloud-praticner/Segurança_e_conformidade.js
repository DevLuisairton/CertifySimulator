const originalQuestions = [
  {
    id: 1,
    text: "Qual é o conceito central do Modelo de Responsabilidade Compartilhada da AWS?",
    options: [
      "A AWS é responsável por toda a segurança da nuvem",
      "O cliente é responsável por toda a segurança da nuvem",
      "A segurança é dividida entre a AWS e o cliente",
      "A segurança é de responsabilidade exclusiva de terceiros"
    ],
    correctAnswer: 2,
    explanation: "O Modelo de Responsabilidade Compartilhada divide a segurança entre a AWS (segurança da nuvem) e o cliente (segurança na nuvem)."
  },
  {
    id: 2,
    text: "No Modelo de Responsabilidade Compartilhada, qual é uma responsabilidade do cliente?",
    options: [
      "Manter a segurança física dos data centers",
      "Gerenciar a segurança dos dados armazenados na nuvem",
      "Atualizar o hardware da infraestrutura da AWS",
      "Gerenciar a infraestrutura global da AWS"
    ],
    correctAnswer: 1,
    explanation: "O cliente é responsável por gerenciar a segurança dos dados armazenados na nuvem, incluindo criptografia e controle de acesso."
  },
  {
    id: 3,
    text: "No Modelo de Responsabilidade Compartilhada, qual é uma responsabilidade da AWS?",
    options: [
      "Gerenciar a segurança dos dados do cliente",
      "Manter a segurança física dos data centers",
      "Configurar firewalls para aplicações do cliente",
      "Gerenciar as credenciais de acesso do cliente"
    ],
    correctAnswer: 1,
    explanation: "A AWS é responsável pela segurança física dos data centers, incluindo proteção contra acesso não autorizado e desastres naturais."
  },
  {
    id: 4,
    text: "Qual serviço da AWS permite aos clientes gerenciar identidades e permissões de acesso?",
    options: [
      "AWS IAM",
      "Amazon S3",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM (Identity and Access Management) permite gerenciar identidades e permissões de acesso de forma segura."
  },
  {
    id: 5,
    text: "Qual é o princípio de segurança que recomenda conceder apenas as permissões necessárias para realizar uma tarefa?",
    options: [
      "Princípio do menor privilégio",
      "Princípio do acesso universal",
      "Princípio da segurança máxima",
      "Princípio da responsabilidade compartilhada"
    ],
    correctAnswer: 0,
    explanation: "O princípio do menor privilégio recomenda conceder apenas as permissões necessárias para realizar uma tarefa, reduzindo riscos de segurança."
  },
  {
    id: 6,
    text: "Qual serviço da AWS permite autenticação multifator (MFA) para aumentar a segurança das contas?",
    options: [
      "AWS IAM",
      "Amazon S3",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite configurar autenticação multifator (MFA) para adicionar uma camada extra de segurança às contas da AWS."
  },
  {
    id: 7,
    text: "Qual serviço da AWS é usado para armazenar e gerenciar segredos, como senhas e chaves de API?",
    options: [
      "AWS Secrets Manager",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Secrets Manager é usado para armazenar e gerenciar segredos de forma segura, como senhas e chaves de API."
  },
  {
    id: 8,
    text: "Qual serviço da AWS permite monitorar e auditar chamadas de API feitas em sua conta?",
    options: [
      "AWS CloudTrail",
      "Amazon S3",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra e monitora chamadas de API feitas em sua conta, fornecendo visibilidade e auditoria."
  },
  {
    id: 9,
    text: "Qual serviço da AWS fornece recomendações de segurança para otimizar a configuração de recursos?",
    options: [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações de segurança para otimizar a configuração de recursos e melhorar a eficiência."
  },
  {
    id: 10,
    text: "Qual serviço da AWS é usado para detectar ameaças e atividades maliciosas em sua conta?",
    options: [
      "Amazon GuardDuty",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    correctAnswer: 0,
    explanation: "O Amazon GuardDuty detecta ameaças e atividades maliciosas em sua conta usando machine learning e análise de logs."
  },
  {
    id: 11,
    text: "Qual serviço da AWS permite criptografar dados em repouso e em trânsito?",
    options: [
      "AWS KMS (Key Management Service)",
      "Amazon S3",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS KMS permite criptografar dados em repouso e em trânsito, garantindo a segurança e a privacidade dos dados."
  },
  {
    id: 12,
    text: "Qual serviço da AWS é usado para proteger aplicações web contra ataques comuns, como SQL injection?",
    options: [
      "AWS WAF (Web Application Firewall)",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF protege aplicações web contra ataques comuns, como SQL injection e cross-site scripting (XSS)."
  },
  {
    id: 13,
    text: "Qual serviço da AWS fornece proteção contra ataques DDoS?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Shield fornece proteção contra ataques DDoS, garantindo a disponibilidade de aplicações e serviços."
  },
  {
    id: 14,
    text: "Qual serviço da AWS centraliza o gerenciamento de segurança e conformidade?",
    options: [
      "AWS Security Hub",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Security Hub centraliza o gerenciamento de segurança e conformidade, fornecendo uma visão unificada do estado de segurança."
  },
  {
    id: 15,
    text: "Qual serviço da AWS permite avaliar a conformidade de recursos com políticas internas e regulamentações externas?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite avaliar a conformidade de recursos com políticas internas e regulamentações externas."
  },
  {
    id: 16,
    text: "Qual serviço da AWS permite automatizar auditorias de conformidade?",
    options: [
      "AWS Audit Manager",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Audit Manager permite automatizar auditorias de conformidade, simplificando o processo de coleta de evidências e geração de relatórios."
  },
  {
    id: 17,
    text: "Onde os clientes podem encontrar relatórios de conformidade e documentação da AWS?",
    options: [
      "AWS Artifact",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact fornece acesso a relatórios de conformidade e documentação da AWS, como ISO, SOC e PCI DSS."
  },
  {
    id: 18,
    text: "Qual serviço da AWS permite monitorar o desempenho e a saúde de recursos em tempo real?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudWatch permite monitorar o desempenho e a saúde de recursos em tempo real, fornecendo métricas e alertas."
  },
  {
    id: 19,
    text: "Qual serviço da AWS permite criar políticas de segurança personalizadas para usuários e grupos?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite criar políticas de segurança personalizadas para usuários e grupos, controlando o acesso aos recursos da AWS."
  },
  {
    id: 20,
    text: "Qual serviço da AWS permite autenticação única (SSO) para múltiplas contas e aplicações?",
    options: [
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM Identity Center (AWS Single Sign-On) permite autenticação única (SSO) para múltiplas contas e aplicações, simplificando o gerenciamento de acesso."
  },
  {
    id: 21,
    text: "Qual serviço da AWS permite gerenciar grupos de segurança para instâncias EC2?",
    options: [
      "Amazon VPC",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O Amazon VPC permite gerenciar grupos de segurança para instâncias EC2, controlando o tráfego de entrada e saída."
  },
  {
    id: 22,
    text: "Qual serviço da AWS permite bloquear tráfego indesejado em nível de rede?",
    options: [
      "ACLs de rede (Network ACLs)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "As ACLs de rede (Network ACLs) permitem bloquear tráfego indesejado em nível de rede, atuando como um firewall para sub-redes."
  },
  {
    id: 23,
    text: "Qual serviço da AWS permite inspecionar automaticamente aplicações em busca de vulnerabilidades?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Inspector inspeciona automaticamente aplicações em busca de vulnerabilidades, fornecendo recomendações de segurança."
  },
  {
    id: 24,
    text: "Qual serviço da AWS permite criptografar dados em trânsito?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite criptografar dados em trânsito, gerenciando certificados SSL/TLS."
  },
  {
    id: 25,
    text: "Qual serviço da AWS permite gerenciar certificados SSL/TLS?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite gerenciar certificados SSL/TLS, facilitando a implementação de criptografia em trânsito."
  },
  {
    id: 26,
    text: "Qual serviço da AWS permite detectar dados confidenciais usando machine learning?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Macie usa machine learning para detectar dados confidenciais, como informações pessoais, em buckets do Amazon S3."
  },
  {
    id: 27,
    text: "Qual serviço da AWS permite gerenciar firewalls de rede centralizados?",
    options: [
      "AWS Network Firewall",
      "AWS WAF",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Network Firewall permite gerenciar firewalls de rede centralizados, protegendo redes virtuais contra tráfego malicioso."
  },
  {
    id: 28,
    text: "Qual serviço da AWS permite compartilhar recursos entre contas da AWS de forma segura?",
    options: [
      "AWS Resource Access Manager (RAM)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Resource Access Manager (RAM) permite compartilhar recursos entre contas da AWS de forma segura e controlada."
  },
  {
    id: 29,
    text: "Qual serviço da AWS permite monitorar e analisar logs de segurança?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudWatch Logs permite monitorar e analisar logs de segurança, fornecendo insights sobre atividades e eventos."
  },
  {
    id: 30,
    text: "Qual serviço da AWS permite gerenciar e auditar configurações de recursos?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite gerenciar e auditar configurações de recursos, garantindo conformidade com políticas e regulamentações."
  },
  {
    id: 31,
    text: "Qual serviço da AWS permite proteger a conta de usuário-raiz com autenticação multifator (MFA)?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite proteger a conta de usuário-raiz com autenticação multifator (MFA), aumentando a segurança da conta."
  },
  {
    id: 32,
    text: "Qual serviço da AWS permite gerenciar identidades federadas?",
    options: [
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM Identity Center (AWS Single Sign-On) permite gerenciar identidades federadas, integrando-se a provedores de identidade externos."
  },
  {
    id: 33,
    text: "Qual serviço da AWS permite gerenciar e rotacionar credenciais de banco de dados de forma segura?",
    options: [
      "AWS Secrets Manager",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Secrets Manager permite gerenciar e rotacionar credenciais de banco de dados de forma segura, reduzindo riscos de segurança."
  },
  {
    id: 34,
    text: "Qual serviço da AWS permite criar políticas de segurança baseadas em tags para recursos?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite criar políticas de segurança baseadas em tags, controlando o acesso a recursos com base em metadados."
  },
  {
    id: 35,
    text: "Qual serviço da AWS permite monitorar alterações em recursos e avaliar a conformidade com políticas?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config monitora alterações em recursos e avalia a conformidade com políticas, fornecendo visibilidade e controle."
  },
  {
    id: 36,
    text: "Qual serviço da AWS permite detectar atividades anômalas em contas da AWS?",
    options: [
      "Amazon GuardDuty",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon GuardDuty detecta atividades anômalas em contas da AWS usando machine learning e análise de logs."
  },
  {
    id: 37,
    text: "Qual serviço da AWS permite inspecionar automaticamente instâncias EC2 em busca de vulnerabilidades?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Inspector inspeciona automaticamente instâncias EC2 em busca de vulnerabilidades, fornecendo recomendações de segurança."
  },
  {
    id: 38,
    text: "Qual serviço da AWS permite criptografar dados em repouso usando chaves gerenciadas pelo cliente?",
    options: [
      "AWS KMS (Key Management Service)",
      "AWS Secrets Manager",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS KMS permite criptografar dados em repouso usando chaves gerenciadas pelo cliente, garantindo controle total sobre a criptografia."
  },
  {
    id: 39,
    text: "Qual serviço da AWS permite gerenciar e distribuir certificados SSL/TLS?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite gerenciar e distribuir certificados SSL/TLS, facilitando a implementação de criptografia em trânsito."
  },
  {
    id: 40,
    text: "Qual serviço da AWS permite detectar dados confidenciais em buckets do Amazon S3?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Macie detecta dados confidenciais em buckets do Amazon S3, ajudando a proteger informações sensíveis."
  },
  {
    id: 41,
    text: "Qual serviço da AWS permite proteger aplicações web contra ataques de injeção de SQL?",
    options: [
      "AWS WAF (Web Application Firewall)",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF protege aplicações web contra ataques de injeção de SQL e outros exploits comuns, como cross-site scripting (XSS)."
  },
  {
    id: 42,
    text: "Qual serviço da AWS fornece proteção contra ataques DDoS em aplicações web?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Shield fornece proteção contra ataques DDoS, garantindo a disponibilidade de aplicações e serviços."
  },
  {
    id: 43,
    text: "Qual serviço da AWS permite centralizar o gerenciamento de segurança e conformidade?",
    options: [
      "AWS Security Hub",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Security Hub centraliza o gerenciamento de segurança e conformidade, fornecendo uma visão unificada do estado de segurança."
  },
  {
    id: 44,
    text: "Qual serviço da AWS permite auditar e monitorar chamadas de API em sua conta?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra e monitora chamadas de API feitas em sua conta, fornecendo visibilidade e auditoria."
  },
  {
    id: 45,
    text: "Qual serviço da AWS permite avaliar a conformidade de recursos com políticas internas?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite avaliar a conformidade de recursos com políticas internas e regulamentações externas."
  },
  {
    id: 46,
    text: "Qual serviço da AWS permite automatizar auditorias de conformidade e gerar relatórios?",
    options: [
      "AWS Audit Manager",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Audit Manager permite automatizar auditorias de conformidade, simplificando o processo de coleta de evidências e geração de relatórios."
  },
  {
    id: 47,
    text: "Qual serviço da AWS permite monitorar o desempenho e a saúde de recursos em tempo real?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudWatch permite monitorar o desempenho e a saúde de recursos em tempo real, fornecendo métricas e alertas."
  },
  {
    id: 48,
    text: "Qual serviço da AWS permite criar políticas de segurança personalizadas para usuários e grupos?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite criar políticas de segurança personalizadas para usuários e grupos, controlando o acesso aos recursos da AWS."
  },
  {
    id: 49,
    text: "Qual serviço da AWS permite autenticação única (SSO) para múltiplas contas e aplicações?",
    options: [
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM Identity Center (AWS Single Sign-On) permite autenticação única (SSO) para múltiplas contas e aplicações, simplificando o gerenciamento de acesso."
  },
  {
    id: 50,
    text: "Qual serviço da AWS permite gerenciar grupos de segurança para instâncias EC2?",
    options: [
      "Amazon VPC",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O Amazon VPC permite gerenciar grupos de segurança para instâncias EC2, controlando o tráfego de entrada e saída."
  },
  {
    id: 51,
    text: "Qual serviço da AWS permite bloquear tráfego indesejado em nível de rede?",
    options: [
      "ACLs de rede (Network ACLs)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "As ACLs de rede (Network ACLs) permitem bloquear tráfego indesejado em nível de rede, atuando como um firewall para sub-redes."
  },
  {
    id: 52,
    text: "Qual serviço da AWS permite inspecionar automaticamente aplicações em busca de vulnerabilidades?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Inspector inspeciona automaticamente aplicações em busca de vulnerabilidades, fornecendo recomendações de segurança."
  },
  {
    id: 53,
    text: "Qual serviço da AWS permite criptografar dados em trânsito?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite criptografar dados em trânsito, gerenciando certificados SSL/TLS."
  },
  {
    id: 54,
    text: "Qual serviço da AWS permite gerenciar certificados SSL/TLS?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite gerenciar certificados SSL/TLS, facilitando a implementação de criptografia em trânsito."
  },
  {
    id: 55,
    text: "Qual serviço da AWS permite detectar dados confidenciais usando machine learning?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Macie usa machine learning para detectar dados confidenciais, como informações pessoais, em buckets do Amazon S3."
  },
  {
    id: 56,
    text: "Qual serviço da AWS permite gerenciar firewalls de rede centralizados?",
    options: [
      "AWS Network Firewall",
      "AWS WAF",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Network Firewall permite gerenciar firewalls de rede centralizados, protegendo redes virtuais contra tráfego malicioso."
  },
  {
    id: 57,
    text: "Qual serviço da AWS permite compartilhar recursos entre contas da AWS de forma segura?",
    options: [
      "AWS Resource Access Manager (RAM)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Resource Access Manager (RAM) permite compartilhar recursos entre contas da AWS de forma segura e controlada."
  },
  {
    id: 58,
    text: "Qual serviço da AWS permite monitorar e analisar logs de segurança?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudWatch Logs permite monitorar e analisar logs de segurança, fornecendo insights sobre atividades e eventos."
  },
  {
    id: 59,
    text: "Qual serviço da AWS permite gerenciar e auditar configurações de recursos?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite gerenciar e auditar configurações de recursos, garantindo conformidade com políticas e regulamentações."
  },
  {
    id: 60,
    text: "Qual serviço da AWS permite proteger a conta de usuário-raiz com autenticação multifator (MFA)?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite proteger a conta de usuário-raiz com autenticação multifator (MFA), aumentando a segurança da conta."
  },
  {
    id: 61,
    text: "Qual serviço da AWS permite gerenciar identidades federadas?",
    options: [
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "AWS IAM",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM Identity Center (AWS Single Sign-On) permite gerenciar identidades federadas, integrando-se a provedores de identidade externos."
  },
  {
    id: 62,
    text: "Qual serviço da AWS permite gerenciar e rotacionar credenciais de banco de dados de forma segura?",
    options: [
      "AWS Secrets Manager",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Secrets Manager permite gerenciar e rotacionar credenciais de banco de dados de forma segura, reduzindo riscos de segurança."
  },
  {
    id: 63,
    text: "Qual serviço da AWS permite criar políticas de segurança baseadas em tags para recursos?",
    options: [
      "AWS IAM",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM permite criar políticas de segurança baseadas em tags, controlando o acesso a recursos com base em metadados."
  },
  {
    id: 64,
    text: "Qual serviço da AWS permite monitorar alterações em recursos e avaliar a conformidade com políticas?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config monitora alterações em recursos e avalia a conformidade com políticas, fornecendo visibilidade e controle."
  },
  {
    id: 65,
    text: "Qual serviço da AWS permite detectar atividades anômalas em contas da AWS?",
    options: [
      "Amazon GuardDuty",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon GuardDuty detecta atividades anômalas em contas da AWS usando machine learning e análise de logs."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 90 * 60, // 30 minutos em segundos
  timerInterval: null,
  examFinished: false
};

// Elementos do DOM
const examContainer = document.getElementById('exam-container');
const resultsContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionNav = document.getElementById('question-nav');
const timerDisplay = document.getElementById('timer-display');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');
const finishModal = document.getElementById('finish-modal');
const cancelFinishBtn = document.getElementById('cancel-finish');
const confirmFinishBtn = document.getElementById('confirm-finish');

// Função para embaralhar as questões
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para formatar o tempo
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Iniciar o timer
function startTimer() {
  examState.timerInterval = setInterval(() => {
    examState.timeRemaining--;

    timerDisplay.textContent = formatTime(examState.timeRemaining);

    if (examState.timeRemaining <= 300) {
      timerDisplay.classList.add('countdown-warning');
    }

    if (examState.timeRemaining <= 0) {
      clearInterval(examState.timerInterval);
      finishExam();
    }
  }, 1000);
}

// Renderizar a navegação de questões
function renderQuestionNav() {
  questionNav.innerHTML = '';

  questions.forEach((question, index) => {
    const navItem = document.createElement('div');
    navItem.className = 'question-nav-item';
    navItem.textContent = index + 1;

    if (index === examState.currentQuestionIndex) {
      navItem.classList.add('current');
    }
    if (examState.answers[question.id] !== undefined && examState.answers[question.id].length > 0) {
      navItem.classList.add('answered');
    }
    if (examState.markedForReview.has(question.id)) {
      navItem.classList.add('marked');
    }

    navItem.addEventListener('click', () => {
      examState.currentQuestionIndex = index;
      renderCurrentQuestion();
      renderQuestionNav();
    });

    questionNav.appendChild(navItem);
  });
}

// Renderizar a questão atual
function renderCurrentQuestion() {
  const question = questions[examState.currentQuestionIndex];
  const selectedAnswers = examState.answers[question.id] || [];

  questionContainer.innerHTML = `
    <div class="question-header">
      <span class="question-number">Questão ${examState.currentQuestionIndex + 1} de ${questions.length}</span>
      <button class="review-btn ${examState.markedForReview.has(question.id) ? 'marked' : ''}" data-id="${question.id}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V5a3 3 0 0 0-3-3z"></path>
        </svg>
        ${examState.markedForReview.has(question.id) ? 'Remover Marcação' : 'Marcar para Revisão'}
      </button>
    </div>
    <div class="question-text">${question.text}</div>
    <div class="options">
      ${question.options.map((option, idx) => `
        <div class="option ${selectedAnswers.includes(idx) ? 'selected' : ''}" data-index="${idx}">
          ${String.fromCharCode(65 + idx)}. ${option}
        </div>
      `).join('')}
    </div>
  `;

  const reviewBtn = questionContainer.querySelector('.review-btn');
  reviewBtn.addEventListener('click', () => {
    toggleReviewMark(question.id);
  });

  const options = questionContainer.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedIndex = parseInt(option.getAttribute('data-index'));
      selectAnswer(question.id, selectedIndex);
    });
  });

  prevBtn.disabled = examState.currentQuestionIndex === 0;
  nextBtn.disabled = examState.currentQuestionIndex === questions.length - 1;
}

// Selecionar uma resposta (ajustada para suportar uma ou duas escolhas)
function selectAnswer(questionId, answerIndex) {
  const question = questions.find(q => q.id === questionId);
  const isMultipleChoice = Array.isArray(question.correctAnswer) && question.correctAnswer.length === 2;

  if (!examState.answers[questionId]) {
    examState.answers[questionId] = [];
  }

  const answerArray = examState.answers[questionId];
  const index = answerArray.indexOf(answerIndex);

  if (index === -1) {
    if (isMultipleChoice && answerArray.length >= 2) {
      return; // Não permite mais de duas escolhas para perguntas de múltipla escolha
    } else if (!isMultipleChoice && answerArray.length >= 1) {
      return; // Não permite mais de uma escolha para perguntas de única escolha
    }
    answerArray.push(answerIndex);
  } else {
    answerArray.splice(index, 1);
  }

  renderCurrentQuestion();
  renderQuestionNav();
}

// Alternar marcação para revisão
function toggleReviewMark(questionId) {
  if (examState.markedForReview.has(questionId)) {
    examState.markedForReview.delete(questionId);
  } else {
    examState.markedForReview.add(questionId);
  }
  renderCurrentQuestion();
  renderQuestionNav();
}

// Navegação entre questões
function goToNextQuestion() {
  if (examState.currentQuestionIndex < questions.length - 1) {
    examState.currentQuestionIndex++;
    renderCurrentQuestion();
    renderQuestionNav();
  }
}

function goToPrevQuestion() {
  if (examState.currentQuestionIndex > 0) {
    examState.currentQuestionIndex--;
    renderCurrentQuestion();
    renderQuestionNav();
  }
}

// Finalizar o exame
function finishExam() {
  clearInterval(examState.timerInterval);
  examState.examFinished = true;
  examContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  renderResults();
}

// Renderizar resultados (ajustada para suportar uma ou duas escolhas)
function renderResults() {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  questions.forEach(question => {
    const selectedAnswers = examState.answers[question.id] || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

    if (selectedAnswers.length === 0) {
      unansweredCount++;
    } else if (arraysEqual(selectedAnswers.sort(), correctAnswers.sort())) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  // Cálculo da porcentagem de acertos
  const percentage = ((correctCount / questions.length) * 100).toFixed(2);

  // Atualizar exibição do score com porcentagem
  document.getElementById('score').textContent = `${correctCount}/${questions.length} (${percentage}%)`;

  document.getElementById('correct-count').textContent = correctCount;
  document.getElementById('incorrect-count').textContent = incorrectCount;
  document.getElementById('unanswered-count').textContent = unansweredCount;

  const resultsQuestionsContainer = document.getElementById('results-questions');
  resultsQuestionsContainer.innerHTML = '';

  questions.forEach(question => {
    const selectedAnswers = examState.answers[question.id] || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

    let status = 'unanswered';
    let statusText = 'Não Respondida';

    if (selectedAnswers.length > 0) {
      status = arraysEqual(selectedAnswers.sort(), correctAnswers.sort()) ? 'correct' : 'incorrect';
      statusText = arraysEqual(selectedAnswers.sort(), correctAnswers.sort()) ? 'Correta' : 'Incorreta';
    }

    const resultHTML = `
      <div class="results-question">
        <div class="results-question-header">
          <h3>Questão ${questions.indexOf(question) + 1}</h3>
          <span class="results-question-status status-${status}">${statusText}</span>
        </div>
        <div class="question-text">${question.text}</div>
        <div class="options">
          ${question.options.map((option, idx) => `
            <div class="option ${correctAnswers.includes(idx) ? 'correct' : ''} ${(selectedAnswers.includes(idx) && !correctAnswers.includes(idx)) ? 'incorrect' : ''}">
              ${String.fromCharCode(65 + idx)}. ${option}
              ${correctAnswers.includes(idx) ? ' ✓' : ''}
              ${(selectedAnswers.includes(idx) && !correctAnswers.includes(idx)) ? ' ✗' : ''}
            </div>
          `).join('')}
        </div>
        <div class="explanation">
          <strong>Explicação:</strong> ${question.explanation}
        </div>
      </div>
    `;

    resultsQuestionsContainer.innerHTML += resultHTML;
  });
}

// Função auxiliar para comparar arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Reiniciar o simulado
function restartExam() {
  clearInterval(examState.timerInterval);

  // Resetar estado
  examState.currentQuestionIndex = 0;
  examState.answers = {};
  examState.markedForReview = new Set();
  examState.timeRemaining = 30 * 60; // Reinicia o tempo para 30 minutos
  examState.examFinished = false;

  // Reembaralhar questões usando original
  questions = shuffleArray([...originalQuestions]);

  // Resetar UI
  timerDisplay.textContent = formatTime(examState.timeRemaining); // Atualiza o display do tempo
  timerDisplay.classList.remove('countdown-warning');
  examContainer.classList.remove('hidden');
  resultsContainer.classList.add('hidden');

  // Reiniciar componentes
  renderQuestionNav();
  renderCurrentQuestion();
  startTimer();
}

// Controle do modal
function showFinishModal() {
  finishModal.classList.add('active');
}

function hideFinishModal() {
  finishModal.classList.remove('active');
}

// Event listeners
nextBtn.addEventListener('click', goToNextQuestion);
prevBtn.addEventListener('click', goToPrevQuestion);
finishBtn.addEventListener('click', showFinishModal);
restartBtn.addEventListener('click', restartExam);
cancelFinishBtn.addEventListener('click', hideFinishModal);
confirmFinishBtn.addEventListener('click', () => {
  hideFinishModal();
  finishExam();
});

// Inicialização
questions = shuffleArray(questions);
renderCurrentQuestion();
renderQuestionNav();
startTimer();
