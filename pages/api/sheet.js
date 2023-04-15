// import { google } from "googleapis";
// import keys from "../../key";

// export default async function handler(req, res) {
//     try {
//         const client = new google.auth.JWT(
//             "finq-61@finquest-test-383619.iam.gserviceaccount.com", null, "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD6883Mh94m2dqB\ns/o7qOa42ZJrfkL9hVbr4BF5O0EYlV9+FGjrNQG1p+V4pkD2EKPMi4/XFHro7DBe\nuBJiEjLdKmBR2kq/xAD4ZVEZke15TOPhjHKiNQqOuwGKqtBwARXf2tRDUm05bIiu\nWOsF4sH8rk3CUYeX6K0n4DwmKFVxb6V8G4nBrKrRhxlrfnPgoRrwdMTKNJlFw4sD\nXaFB1Bbc27VFBYQbfKtHSbFzYL4L7nEx6Qp85f1hR2pDKC6tLHRusAYpsRZhm1js\nmIGbmCNBxWdzwpaf5HLHSnlGEnMcZ9e6/Fj8VhGQkuf9CKuE1e0KJ+7leZ5scb7n\n6mT950t1AgMBAAECggEAL+uPYF+Pfca68WqPPYY2rJSrX4hoPWYRX5BVddtpRkr7\nxaUbFdL05R3O9Vd17yblSGFcEbuQ7tpvMB8hL4X/HXmClA7FmFHSx5v9PQ8/FBsp\nJsA9gZj0T6YJGNQeYkzqwujUAJkET2NYxEYpduHCnkAgjBsqc8kUC5nHkpfAHR1O\nZKgm99T/gy3E23OO/NOWur7D6m+NNymlHmqLnbwPTP4h0ywpQkBfNM9Om9m4XdmY\nY68eJDKTnn4CAKLY7Dj21PBwG4GgJ9NBsRkOXBs9KLTuo0wSq2lqnmlleObY2WPv\n8xKYcBU8b9p42gNgRFo8TG2GN+j08Elb12LlEyZufwKBgQD+fjrq6ZJfVyM1dSEH\nbxEtYtOJJtw+4NBBYE07WmyIODluForb0DBdMdUK3PdnzEQwQYialNJx1WcpZ2Ga\nz5Own2WlOnZMAGkV7/6pWs9yaz92uQIpGau+83op4bbbGGd+hl/BxdQzhafMZPw5\nQwhWuXG2VIHQuo393RQ+HXkqxwKBgQD8cDTjNZasEaiXlZkoPAltQ9/1dW6DrlHS\nDv+Km2Kq3IgzNcMIeJiGpEVWSIHcCp9qzAk3FTLLuf33WI/gVwcIhjm3T+6RMfbw\nKYnO0cQIEyn43cyW+rAAtz8INVUf3wAV9y46l+/cPZxjSyDdvWZZ/IR1RYgqn2v6\n4J7EbhG74wKBgQD3Pj+TNbSkt41XRCIAjOENTPPiTUSwOc1Zlmux/BlxBd6Vm4Tw\nJQS3pdAqK56Y0xR0JVbHh0okmYUN7oge1QfREiq4KWIAWG2/iFfKxJTBvnv7paX5\ntBzs+LJ4ufbiSIVToMyq/r04COOKaZm5L+yMBMH6t4Me+/8y4XPnHM84xQKBgEAu\n61OFsYyIZNw9vhY7xY3RfyTyuamjbcxB4flE7r5QmhSjK7aAqw84vyRkBRiEXuoR\nfJpTunmQDaGRE+vPVMt3DT+thBPIp2eCuDYsoXIIJVjQVA9jJ9LWxKD6pm0XDveG\nxGtDbEoMJDIezPl0CY0BplAG4Mstg4/jApsg/UNPAoGBAOxwahbIFqcgJ9UT4LTA\nVLJ9r917Wz8VVVWTVyGeribCOQzQEnjLva+hLYXcy7qC6xNQrGZPJJH8vZ2VI6zu\n57jZAIHTSlnf8ZJy0P5KpUKX3PD/T/Qt3O8m+DXH8moYEhE2SLCWWj920PBCMkVN\nQxDoHK4EJmKP7IPlqeJvfsJW\n-----END PRIVATE KEY-----\n", ['https://www.googleapis.com/auth/spreadsheets']
//         );

//         client.authorize(async function(err, tokens) {
//             if (err) {
//                 return res.status(400).send(JSON.stringify({error: true}));
//             }

//             const gsapi = google.sheets({version:'v4', auth: client});

//             //CUSTOMIZATION FROM HERE
//             const opt = {
//                 spreadsheetId: process.env.spreadsheetId,
//                 range: 'Sheet1!A2:D4'
//             };

//             let data = await gsapi.spreadsheets.values.get(opt);
//             return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
//         });
//     } catch (e) {
//         return res.status(400).send(JSON.stringify({error: true, message: e.message})) ;
//     }
// }