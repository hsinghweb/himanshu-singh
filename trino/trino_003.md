---
layout: default
title: "Trino 003 – Understanding Trino"
permalink: /trino/trino_003/
---

<div class="container">
  <h1>Trino_003: Understanding Trino</h1>

  <div class="highlight">
    <p>A comprehensive overview of <span class="emphasis">what Trino is</span>, its <span class="emphasis">key capabilities</span>, and <span class="emphasis">benefits</span>.</p>
  </div>

  <h2><span class="emoji">🕰️</span> History of Trino</h2>
  <div class="highlight">
    <p>From Hive to Presto to Trino: A journey of evolution in distributed SQL engines.</p>
  </div>
  <ul>
    <li><span class="emphasis">2008</span>: Facebook open-sourced <span class="emphasis">Hive</span> for running analytics on HDFS via Hadoop</li>
    <li><span class="emphasis">2012</span>:
      <ul>
        <li>Hive couldn't scale for Facebook's interactive analytics needs (250PB warehouse, tens of thousands of daily queries)</li>
        <li>Facebook engineers began developing <span class="emphasis">Presto</span> to run fast, distributed queries directly on data sources</li>
      </ul>
    </li>
    <li><span class="emphasis">2013</span>: Presto went into <span class="emphasis">production at Facebook</span> and was <span class="emphasis">open-sourced</span></li>
    <li><span class="emphasis">2015</span>:
      <ul>
        <li><span class="emphasis">Teradata</span> contributed 20 engineers to add enterprise features to Presto</li>
        <li><span class="emphasis">Amazon</span> added Presto to <span class="emphasis">AWS EMR</span></li>
      </ul>
    </li>
    <li><span class="emphasis">2016</span>: Amazon launched <span class="emphasis">Athena</span>, built on Presto</li>
    <li><span class="emphasis">2017</span>: <span class="emphasis">Starburst</span> was founded to support and commercialize Presto</li>
    <li><span class="emphasis">2018</span>: Original creators left Facebook, formed <span class="emphasis">Presto Software Foundation</span>, and forked the project as <span class="emphasis">PrestoSQL</span></li>
    <li><span class="emphasis">2020</span>:
      <ul>
        <li>Community renamed PrestoSQL to <span class="emphasis">Trino</span> to avoid confusion with PrestoDB</li>
        <li><span class="emphasis">Trino Software Foundation</span> was established</li>
        <li><span class="emphasis">Version 351</span> onward used the Trino name (last PrestoSQL version was 350)</li>
      </ul>
    </li>
    <li><span class="emphasis">Present</span>:
      <ul>
        <li>Trino is widely adopted by top companies (Netflix, LinkedIn, Google, Amazon, etc.)</li>
        <li>Ongoing innovation includes <span class="emphasis">SQL feature expansion, Java 17 upgrade</span>, fault-tolerant execution, and modern integrations</li>
      </ul>
    </li>
  </ul>

  <h2><span class="emoji">🔹</span> What is Trino?</h2>
  <ul>
    <li>Open source, distributed <span class="emphasis">SQL query engine</span> (not a database)</li>
    <li>Designed for <span class="emphasis">high-performance analytics</span> using standard SQL</li>
    <li>Built from scratch to efficiently <span class="emphasis">query large and diverse datasets</span></li>
  </ul>

  <h2><span class="emoji">🔹</span> Key Capabilities</h2>
  <div class="highlight">
    <p>Trino combines powerful features to deliver exceptional query performance:</p>
  </div>
  <ul>
    <li>Enables <span class="emphasis">interactive SQL querying</span> on data from gigabytes to petabytes</li>
    <li>Uses <span class="emphasis">massively parallel processing (MPP)</span> with:
      <ul>
        <li>In-memory execution</li>
        <li>Multithreading</li>
        <li>Pipelined architecture</li>
      </ul>
    </li>
    <li>Delivers <span class="emphasis">OLAP</span> (online analytical processing) workloads efficiently</li>
  </ul>

  <h2><span class="emoji">🔹</span> Data Access – "SQL on Anything"</h2>
  <p>Query data <span class="emphasis">without moving it</span>, across:</p>
  <ul>
    <li><span class="emphasis">Data lakes & object storage</span>:
      <ul>
        <li>S3</li>
        <li>Azure Blob</li>
        <li>GCS</li>
        <li>MinIO</li>
        <li>Ceph</li>
      </ul>
    </li>
    <li><span class="emphasis">RDBMS</span>: PostgreSQL, MySQL, SQL Server, Oracle, Redshift, etc.</li>
    <li><span class="emphasis">NoSQL</span>: Cassandra, MongoDB, Kafka, Elasticsearch, etc.</li>
    <li>Supports <span class="emphasis">modern table formats</span> like Hive, Delta Lake, and Iceberg</li>
  </ul>

  <h2><span class="emoji">🔹</span> Benefits</h2>
  <ul>
    <li><span class="emphasis">Federated querying</span>: Query across multiple sources using a single SQL query</li>
    <li>Eliminates or reduces need for <span class="emphasis">heavy ETL pipelines</span></li>
    <li>Works with existing <span class="emphasis">analytics tools</span> and SQL skills</li>
    <li>Avoids the cost-performance tradeoff between slow free tools and expensive proprietary systems</li>
  </ul>
 
  <h2><span class="emoji">🔹</span> Trino Architecture & Benefits</h2>
  <ul>
    <li><span class="emphasis">Separation of storage & compute</span>: Queries data where it lives; no data movement needed</li>
    <li><span class="emphasis">Scalable compute</span>: Adjusts compute power based on demand</li>
    <li><span class="emphasis">Cost-efficient</span>: Optimize hardware usage dynamically</li>
  </ul>

  <h2><span class="emoji">🔹</span> Key Use Cases</h2>
  <div class="highlight">
    <p>Trino serves multiple use cases in modern data architectures:</p>
  </div>
  <ul>
    <li><span class="emphasis">Unified SQL Access</span>: Query all databases (RDBMS, NoSQL, data lakes) with one SQL</li>
    <li><span class="emphasis">Federated queries</span>: Combine data from multiple sources in one query</li>
    <li><span class="emphasis">Virtual data warehouse</span>: Acts as a semantic layer without data duplication</li>
    <li><span class="emphasis">Data lakehouse</span>: Queries modern lake formats like Delta Lake & Iceberg</li>
    <li><span class="emphasis">ETL & SQL conversion</span>: Supports data movement, transformation via SQL</li>
    <li><span class="emphasis">ML & AI-ready</span>: Scales for big data and integrates with tools like R</li>
  </ul>

  <h2><span class="emoji">🔹</span> Ecosystem & Community</h2>
  <ul>
    <li><span class="emphasis">Open source</span>: Apache 2.0 license; active GitHub community</li>
    <li><span class="emphasis">Learning resources</span>: Website, Slack, documentation, book examples</li>
    <li><span class="emphasis">Contribution-friendly</span>: Encourages all levels of contributions</li>
  </ul>

  <h2><span class="section-title">📚 Summary Statement</span></h2>
  <div class="highlight">
    <p>Trino is a <span class="emphasis">high-performance, distributed SQL engine</span> that enables <span class="emphasis">federated, interactive querying</span> over <span class="emphasis">any data source</span>, allowing organizations to extract insights faster without moving data or changing tools.</p>
  </div>


</div>