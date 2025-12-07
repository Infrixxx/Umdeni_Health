import qrcode

file_path = "/home/g33k/Pictures/qrcode.png"
qr = qrcode.QRCode()
qr.add_data("liyabona")

img = qr.make_image()
img.save(file_path)