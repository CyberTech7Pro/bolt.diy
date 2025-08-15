#!/usr/bin/env bash
set -e

# Adiciona um binding somente se a variável existir no ambiente do container
add() { [ -n "${!1}" ] && printf ' --binding %s=%q' "$1" "${!1}"; }

# LLMs
add OPENAI_API_KEY
add GROQ_API_KEY
add ANTHROPIC_API_KEY
add OPEN_ROUTER_API_KEY
add GOOGLE_GENERATIVE_AI_API_KEY
add XAI_API_KEY
add TOGETHER_API_KEY
add TOGETHER_API_BASE_URL
add AWS_BEDROCK_CONFIG

# Ollama
add OLLAMA_API_BASE_URL

# Outros úteis
add VITE_LOG_LEVEL
add DEFAULT_NUM_CTX
add WRANGLER_SEND_METRICS

# imprime os flags para o wrangler
echo
