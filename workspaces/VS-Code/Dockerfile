# Kasm VS-Code Container with Node.js
FROM kasmweb/vs-code:1.18.0-rolling-weekly

# Install dependencies for Node.js
USER root
RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Switch back to default user
USER 1000

# Default command (inherited from base image)
CMD ["/startup.sh"]
