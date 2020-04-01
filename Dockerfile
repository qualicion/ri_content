FROM node:10-slim

WORKDIR /content-tests 

RUN mkdir -p /usr/share/man/man1 && \
	apt-get update; apt-get -y install openjdk-8-jre-headless xvfb wget && \
	wget --no-verbose https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
	dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install && \
	rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock /content-tests/
RUN yarn install --frozen-lockfile && yarn cache clean

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod 755 /usr/local/bin/entrypoint.sh

COPY . /content-tests/

ENV XVFB_DISPLAY=:99
ENV XVFB_ARGS="-screen 0 1600x1400x16 -dpi 72 -ac +extension RANDR"
ENV DISPLAY=${XVFB_DISPLAY}

ENTRYPOINT ["entrypoint.sh"]