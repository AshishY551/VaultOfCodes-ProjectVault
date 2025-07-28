<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Vault of Codes Certificate Verifier - Verify your internship certificate by email or ID." />
  <meta name="keywords" content="Vault of Codes, Internship, Certificate, Verifier, ID, Email" />
  <meta name="author" content="Vault of Codes" />
  <title>Vault of Codes | Certificate Verifier</title>

  <!-- CSS -->
  <link rel="stylesheet" href="assets/css/style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
  <!-- Sidebars & Header -->
  <div id="left-sidebar"></div>
  <div id="right-sidebar"></div>
  <div id="header"></div>

  <!-- Main -->
  <main>
    <section class="container fade-in">
      <h1 class="main-title">🔍 Verify Certificate</h1>
      <p class="subtitle">Enter your email or certificate ID below to verify your internship</p>

      <div class="form-group">
        <input
          type="text"
          id="identifier"
          placeholder="e.g., john@example.com or VCOC12345"
          aria-label="Certificate ID or Email"
          autocomplete="off" />
        <button onclick="verifyStudent()">✅ Verify Now</button>
        <button onclick="verifyWithAPI()">✅ Verify Now with API</button>
      </div>
    </section>

    <div class="spinner hidden" role="status"></div>
    <section id="result" aria-live="polite"></section>
  </main>

  <div id="toast" class="toast" role="alert"></div>

  <!-- Footer -->
  <div id="footer"></div>

  <!-- JS -->
  <script src="assets/js/script.js"></script>
  <script>
    // Load templates dynamically
    const loadTemplate = (id, file) => {
      fetch(file)
        .then(res => res.text())
        .then(data => document.getElementById(id).innerHTML = data);
    };
    loadTemplate('header', 'templates/header.html');
    loadTemplate('footer', 'templates/footer.html');
    loadTemplate('left-sidebar', 'templates/Expandable-Left-sidebar.html');
    loadTemplate('right-sidebar', 'templates/Expandable-Right-sidebar.html');
  </script>
</body>

</html>