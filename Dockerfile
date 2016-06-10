FROM docker.agavelab.com/nodes/node:4.4.2

ADD . /app
WORKDIR /app

RUN npm install -g grunt-cli pm2

RUN /app/setup.sh
RUN /app/test.sh

CMD echo "All's Good in Jacob's Garden"
