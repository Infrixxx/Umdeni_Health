import qrcode

def generateqrcode(data):
    qr = qrcode.QRCode()
    qr.add_data(data)

    img = qr.make_image()
    img.save()