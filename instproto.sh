#/usr/bin/bash

PROTOC_ZIP=protoc-3.19.6-linux-x86_64.zip
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.19.6/$PROTOC_ZIP
sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
rm -f $PROTOC_ZIP
