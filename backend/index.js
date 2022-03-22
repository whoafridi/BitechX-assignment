const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://{your own credentials}@cluster0.j9yy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("blog");
    const blogCollection = database.collection("articles");
    console.log("connected");
    // GET API
    app.get("/blogs", async (req, res) => {
      const cursor = blogCollection.find({});
      const articles = await cursor.toArray();
      console.log("getting all");
      res.send(articles);
    });
    // filter by category 
    app.get("/category", async (req, res) => {
      const type = req.query.category;
      console.log(type);
      const cursor = blogCollection.find({ type : type});
      const service = await cursor.toArray();
      res.send(service);
    });
    // DELETE API
    app.delete("/blogs", async (req, res) => {
      const query = {};
      const result = await blogCollection.deleteMany(query);

      console.log("deleting all ", result);

      res.json(result);
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my CRUD Server");
});

app.listen(port, () => {
  console.log("Running Server on port", port);
});
