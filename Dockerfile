FROM oven/bun
WORKDIR /app
EXPOSE 3000

# install postgres client 15
RUN apt update
RUN apt upgrade -y
RUN apt install sudo gpg software-properties-common apt-transport-https curl -y
RUN curl -fsSl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/postgresql.gpg > /dev/null
RUN echo deb [arch=amd64,arm64,ppc64el signed-by=/usr/share/keyrings/postgresql.gpg] http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main | sudo tee /etc/apt/sources.list.d/postgresql.list
RUN apt update
RUN apt install postgresql-client-15 -y

CMD ["bun", "start:watch"]
