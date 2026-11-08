import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const options = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export async function getDatabase(): Promise<{ db: Db | null; isConnected: boolean; error?: string }> {
  if (!uri) {
    return { db: null, isConnected: false, error: 'MONGODB_URI environment variable is not configured.' };
  }

  try {
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    const connectedClient = await clientPromise;
    const db = connectedClient.db('jeevan_safety_matches');
    return { db, isConnected: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to connect to MongoDB Atlas';
    console.error('MongoDB Atlas Connection Error:', errorMsg);
    return { db: null, isConnected: false, error: errorMsg };
  }
}

export default clientPromise;
