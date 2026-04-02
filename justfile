# Default recipe - list all available commands
default:
  @just --list

# Start development server
dev:
  infisical run -- pnpm dev

# Alias for dev - start development server
run:
  infisical run -- pnpm dev

# Build for production
build:
  infisical run -- pnpm build

# Start production server
start:
  infisical run -- pnpm start

# Run ESLint
lint:
  infisical run -- pnpm lint

# Type check without emitting
typecheck:
  infisical run -- pnpm typecheck

# Format code with Prettier
format:
  infisical run -- pnpm format

# Run lint-staged
lint-staged:
  infisical run -- pnpm lint-staged

# Optimize images
optimize-images:
  infisical run -- pnpm optimize-images
