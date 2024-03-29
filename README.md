<!-- omit in toc -->
# Smart Edu Projesi ![Logo](/public/images/logo.png)
---
Bu proje, öğretmenlerin öğrencilere kurs hizmeti verdiği bir web uygulamasıdır. Uygulama içinde yapabileceğiniz işlemler şunlardır:
- Öğrenci ve öğretmen kaydı
- Kurs oluşturma, düzenleme ve silme
- Kurs kategorisi oluşturma, düzenleme ve silme
- Kursa öğrenci kaydı
---
# Kullanılan Teknolojiler
- [Node.js](https://nodejs.org/tr/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com/)
---
# Kurulum

Bilgisayarınızda [Docker](https://www.docker.com/) **kurulu olmalıdır**. Docker kurulumu için [Docker Desktop](https://www.docker.com/products/docker-desktop) adresini ziyaret edebilirsiniz.

1-İlk olarak projeyi klonlayın.
```sh
git clone https://github.com/TahaMuslu/SmartEduProject.git
```

2-Daha sonra projenin bulunduğu dizine girin.
```sh
cd SmartEduProject
```

3-Son olarak projeyi çalıştırın.
```sh
docker compose up -d
```
4-Uygulamayı çalıştırdıktan sonra `http://localhost:5000` adresine giderek uygulamayı kullanabilirsiniz.
>Default olarak 5000 portunda çalışmaktadır. Port değiştirmek için `docker-compose.yml` dosyasını düzenleyin.


Uygulamayı Sonlandırmak İçin
```sh
docker compose down
```

#LİSANS
[MIT © Taha Yasin Muslu](https://mit-license.org/)