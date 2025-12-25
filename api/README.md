### 📘 README.md

## Sequelize Model + API Generator (y.sh) 

---

### Step 1️⃣: Database & Table Create karo

1. **phpMyAdmin** open karo
2. Apni **database select** karo
3. **New table** create karo

   * Columns define karo
   * Primary key set karo
   * Data types properly choose karo

---

### Step 2️⃣: Sequelize Model Auto Generate (Database se)

Agar aap **database se Sequelize models** generate karna chahte ho, to terminal me ye command use karo 👇

```bash
npx sequelize-auto -h localhost -d your_db_name -u your_db_user -p your_db_password -x -e mysql -o ./models
```

**Result:**

* `models` folder create hoga
* Database ki **saari tables ke Sequelize models** auto generate ho jayenge

---

### Step 3️⃣: Sirf Single Table ka Sequelize Model

Agar sirf **ek table** ka model banana ho:

```bash
npx sequelize-auto -h localhost -d your_db_name -u your_db_user -p your_db_password -x -e mysql -o ./models -t table_name
```

➡️ `table_name` = phpMyAdmin me banaye gaye table ka exact naam

---

### Step 4️⃣: `y.sh` ka Actual Kaam (IMPORTANT ✅)

⚠️ **NOTE:**
`y.sh` file **Sequelize model generate nahi karti**.

`y.sh` ka kaam hai 👇

```bash
./y.sh table_name
```

#### `y.sh` kya karta hai:

* Given **table / model name** ke base par:

  * ✅ Route file create karta hai
  * ✅ Controller file create karta hai
  * ✅ Service file create karta hai
* `api/src/admin/routes/index.js` me:

  * Route **automatically add** karta hai
  * Agar route pehle se ho, to duplicate add nahi karta
* Ready-to-use **CRUD API endpoints** generate karta hai

---

### 📌 Auto Generated API Endpoints (Example: `pages`)

```
GET    /api/pages/
GET    /api/pages/:id
GET    /api/pages/for-update/:id
POST   /api/pages/
PUT    /api/pages/:id
DELETE /api/pages/:id
```

---

### ✅ Final Flow (Correct)

1. **phpMyAdmin** → Table create
2. **sequelize-auto** → Sequelize model generate
3. **y.sh** →

   * Routes
   * Controllers
   * Services
   * CRUD APIs ready

---

### 🎯 Result

* Clear separation of responsibility
* `sequelize-auto` → **models**
* `y.sh` → **API layer (route + controller + service)**
* Fast development, no manual boilerplate 💯
