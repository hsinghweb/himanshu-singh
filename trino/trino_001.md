---
layout: default
title: "Trino 001 – SQL at Any Scale, on Any Storage, in Any Environment"
permalink: /trino/trino_001/
---

<div class="container">
  <h1>Trino – Core Value Proposition</h1>

  <p>The phrase <strong>"SQL at Any Scale, on Any Storage, in Any Environment"</strong> is Trino's core value proposition.</p>

  <h2>Breaking Down the Value Proposition</h2>

  <h3>✅ SQL at Any Scale</h3>
  <p>You can use standard SQL to query data ranging from <em>megabytes</em> to <em>petabytes</em>. Trino’s distributed <abbr title="Massively Parallel Processing">MPP</abbr> architecture delivers interactive performance even on huge datasets.</p>

  <h3>✅ On Any Storage</h3>
  <p>Query data <em>wherever it lives</em> without movement or duplication:</p>
  <ul>
    <li>Data lakes — S3, HDFS, Azure Data Lake (Parquet, ORC, Avro)</li>
    <li>Data warehouses — Snowflake, BigQuery, Redshift</li>
    <li>Relational databases — MySQL, PostgreSQL, SQL Server</li>
    <li>NoSQL stores — Cassandra, MongoDB</li>
  </ul>
  <p>Trino acts as a <strong>query-federation engine</strong>, enabling joins across heterogeneous sources.</p>

  <h3>✅ In Any Environment</h3>
  <p>Run Trino:</p>
  <ul>
    <li>On-premises</li>
    <li>In any cloud (AWS, Azure, GCP) or hybrid cloud</li>
    <li>Inside Kubernetes, VMs, or bare metal</li>
  </ul>
  <p>It fits modern <em>Data Mesh</em>, <em>Lakehouse</em>, and multi-cloud architectures.</p>

  <h2>🔍 Summary</h2>
  <p>Trino lets you use familiar SQL to query <strong>any kind of data, at any scale, stored anywhere, from any infrastructure</strong> — without moving the data.</p>

  <h2>📚 Key Learnings</h2>
  <ul>
    <li>Storage-agnostic &amp; infrastructure-neutral</li>
    <li>Supports federated queries for a unified query layer</li>
    <li>Ideal for organisations with diverse systems and large-scale data needs</li>
  </ul>

  <p class="text-center mt-2"><a class="back-link" href="/trino/">&larr; Back to Trino Overview</a></p>
</div>