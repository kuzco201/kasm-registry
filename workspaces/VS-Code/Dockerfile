# Base image from Kasm VS Code
FROM kasmweb/vs-code:1.18.0-rolling-weekly

USER root

# Install Node.js (LTS)
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Fix permissions (important for Kasm)
RUN chown -R 1000:1000 /home/kasm-user

USER 1000

# Default command
CMD ["/startup.sh"]
