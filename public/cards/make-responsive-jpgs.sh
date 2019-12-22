#!/bin/bash
# echo hovno$1
echo copying $1 $2
cp -r $1 $1_$2

echo converting $1 to $2px
sips -Z $2 ./$1/$2/*.jpg
