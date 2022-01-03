# Jawaban
## Specs
1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi *Skiljek* dan relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Email**
- **Phone Number**
<br>Jawab : **Relasi One to One** <br>
**Skema Data** :
```
{
    "_id": "ObjectId('AAA')",
    "fullName": "Fikri",
    "email": "fikri@mail.com",
    "phoneNumber": "08111222333"
}
```

2. Buatlah skema untuk kebutuhan data alamat pengguna *SkilShop* dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Phone Number**
- **Address (Max 2)**
<br>Jawab : **Relasi One to Many**<br>**Skema Data** :
``` 
    {
        "_id": "ObjectId('AAA')",
        "fullName": "Fikri",
        "phoneNumber": "08111222333",
        "address" : [
            {
                "_id": "ObjectId('AAA')",
                "street": "Jalan Jendral Soedirman",
                "city": "Balikpapan"
            },
            {
                "_id": "ObjectId('AAB')",
                "street": "Jalan Kemang",
                "city": "Jakarta"
            }
        ]
    }
```

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi *SkilShop*. Jelasskan juga relasi apakah yang tepat untuk data tersebut?
Contoh data yang dibutuhkan adalah:

**Product**

Product Name: Kaos Polos

Brand Name: SkilShirt

**Varian Pertama**

Varian Name 1: Kaos Polos Hitam

Color: Hitam

Quantity: 12

Price: Rp 99.000

**Varian Kedua**

Varian Name 1: Kaos Polos Navy

Color: Navy

Quantity: 10

Price: Rp 99.000
<br>
<br> Jawab : **Relasi One to Many**
<br> **Skema Data** : 
<br> - Product Schema
```
    {
        "_id": "ObjectId('BBB')",
        "productName": "Kaos Polos",
        "brandName": "SkilShirt",
        "variants": ["ObjectId('BBB1')", "ObjectId('BBB2')"]
    }
```
<br> - Variants Schema
```   
    {
        "_id" : "ObjectId('BBB1')",
        "variantName" : "Kaos Polos Hitam",
        "color" : "Hitam",
        "quantity" : 12,
        "price" : 99000
    },
    {
        "_id" : "ObjectId('BBB2')",
        "variantName" : "Kaos Polos Navy",
        "color" : "Navy",
        "quantity" : 10,
        "price" : 99000
    }
```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama *SkilFlix*. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?

Contoh Data yang dibutuhkan:

**Cinemas**

*First Cinema*
- Cinema Name: CGF
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Pondok Indah Mall

*Second Cinema*

- Cinema Name: Cinema31
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Mall Kelapa Gading
<br>Jawab : **Relasi Many to Many**<br>**Skema Data** :
```
//cinema schema
{
    "_id" : "ObjectId('MV11')",
    "cinemaName" : "CGF",
    "films" : ["ObjectId('F11')", "ObjectId('F12')"],
    "location" : "Pondok Indah Mall"
},
{
    "_id" : "ObjectId('MV12')",
    "cinemaName" : "Cinema31",
    "films" : ["ObjectId('F11')", "ObjectId('F12')"],
    "location" : "Mall Kelapa Gading"
}
```

```
//film schema
{
    "_id" : "ObjectId('F11')",
    "filmName" : "Venom 2",
    "playedByCinema" : ["ObjectId('MV11')", "ObjectId('MV12')"]
},
{
    "_id" : "ObjectId('F12')",
    "filmName" : "Spiderman No Way Home",
    "playedByCinema" : ["ObjectId('MV11')", "ObjectId('MV12')"]
}
```

## Example of Expected Results
Relasi: One-to-one
Skema Data:
```js
{
    "_id": "ObjectId('AAA')",
    "name": "John Doe",
    "company": "Skilvul",
    "twitter": "@johndoe",
    "tiktok": "johndoe",
    "website": "johndoe.com"
}
```