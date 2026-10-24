-- Dedicated Cloudflare D1 database. Payload contains encrypted consumer details.
CREATE TABLE IF NOT EXISTS complaints (
  sequence INTEGER PRIMARY KEY AUTOINCREMENT,
  reference TEXT NOT NULL UNIQUE,
  request_key TEXT NOT NULL UNIQUE,
  fingerprint TEXT NOT NULL,
  received_at TEXT NOT NULL,
  provider_json TEXT NOT NULL,
  encrypted_payload TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'received',
  response_at TEXT,
  response_evidence TEXT
);
CREATE INDEX IF NOT EXISTS complaints_status_date ON complaints(status, received_at);
