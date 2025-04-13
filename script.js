document.getElementById('grades').addEventListener('change', function () {
    const grade = this.value;
    const content = document.getElementById('content');
  
    // محتوى مبدئي لكل صف - سنطوره لاحقاً باستخدام AI
    content.innerHTML = `
      <h2>📘 دروس الصف ${grade}</h2>
      <p>هنا سيتم عرض دروس الرياضيات، الأهداف التعليمية، وربط الهوية الوطنية والاختبارات الدولية مثل PISA و IBT.</p>
      <ul>
        <li>➕ درس 1: المفاهيم الأساسية</li>
        <li>➗ درس 2: حل المشكلات</li>
        <li>🔺 درس 3: الأشكال الهندسية</li>
        <li>💡 المهارات العليا في التفكير</li>
      </ul>
    `;
  });
  