### 📘 README.md

#### Step 1️⃣

Sabse pehle **phpMyAdmin** open karo
➡️ Apni database select karo
➡️ **New table** create karo (columns, primary key, etc.)

---

#### Step 2️⃣

Jab table ban jaye, us **table ka naam** use karke Sequelize model generate karo.

Terminal me ye command likho 👇

```bash
npx sequelize-auto -h localhost -d your_db_name -u your_db_user -p your_db_password -x -e mysql -o ./models
```

➡️ Is command ke baad

* `models` naam ka folder banega
* Database ki tables ke **Sequelize models automatically** create ho jayenge

---

#### Step 3️⃣ (Single table ke liye)

Agar sirf **ek hi table ka model** banana hai to:

```bash
npx sequelize-auto -h localhost -d your_db_name -u your_db_user -p your_db_password -x -e mysql -o ./models -t table_name
```

➡️ `table_name` ki jagah
➡️ **phpMyAdmin me banaye gaye table ka exact naam** likho

---

#### Step 4️⃣ (Shell script use karna ho)

Agar `y.sh` file banai hai, to usme table ka naam dekar command chala sakte ho:

```bash
./y.sh table_name
```

➡️ Automatically us table ka model
➡️ `./models` folder me generate ho jayega ✅

---

✅ **Result**

* Database table → Sequelize model
* Manual model likhne ki zarurat nahi
* Direct CRUD / API ke liye ready model 🎯

