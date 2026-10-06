/**
 * quiz.js
 * Interactive Quiz & Assessment Engine for Flowchart Learning Module
 */

class FlowchartQuizEngine {
  constructor(courseData) {
    this.data = courseData;
    this.bab10 = courseData.chapters.find(c => c.id === "bab10");
    this.userPgAnswers = {};
    this.userBsAnswers = {};
  }

  renderPgQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !this.bab10) return;

    const questions = this.bab10.pgQuestions || [];
    let html = `
      <div class="quiz-header-card">
        <div class="quiz-info">
          <h3>📝 Kuis Pilihan Ganda: 15 Soal Standar Ujian</h3>
          <p>Pilih salah satu jawaban yang paling tepat. Anda dapat melihat skor dan pembahasan mendalam secara instan!</p>
        </div>
        <div class="quiz-score-badge" id="pg-score-badge">
          <span class="score-num">0</span> / ${questions.length} Terjawab
        </div>
      </div>
      <div class="quiz-list">
    `;

    questions.forEach((q, idx) => {
      const selected = this.userPgAnswers[q.id];
      html += `
        <div class="quiz-item-card" id="pg-card-${q.id}">
          <div class="quiz-q-num">Soal ${idx + 1} dari ${questions.length}</div>
          <div class="quiz-q-text">${q.q}</div>
          <div class="quiz-options-grid">
            ${q.options.map((opt, optIdx) => {
              let optClass = "quiz-opt-btn";
              if (selected !== undefined) {
                if (optIdx === q.ans) optClass += " correct-opt";
                else if (selected === optIdx) optClass += " wrong-opt";
              }
              return `
                <button type="button" class="${optClass}" onclick="window.quizEngine.submitPgAnswer(${q.id}, ${optIdx})">
                  <span class="opt-letter">${String.fromCharCode(65 + optIdx)}</span>
                  <span class="opt-label">${opt}</span>
                </button>
              `;
            }).join("")}
          </div>
          <div class="quiz-explanation" id="pg-exp-${q.id}" style="${selected !== undefined ? 'display:block;' : 'display:none;'}">
            <strong>💡 Pembahasan:</strong> ${q.exp}
          </div>
        </div>
      `;
    });

    html += `
      </div>
      <div class="quiz-actions-footer">
        <button type="button" class="btn btn-secondary" onclick="window.quizEngine.resetPgQuiz()">🔄 Ulangi Kuis</button>
      </div>
    `;

    container.innerHTML = html;
  }

  submitPgAnswer(qId, selectedIdx) {
    if (this.userPgAnswers[qId] !== undefined) return; // already answered
    this.userPgAnswers[qId] = selectedIdx;
    this.renderPgQuiz("pg-quiz-container");
    this.updatePgScore();
  }

  updatePgScore() {
    const questions = this.bab10.pgQuestions || [];
    let correctCount = 0;
    let answeredCount = 0;

    questions.forEach(q => {
      if (this.userPgAnswers[q.id] !== undefined) {
        answeredCount++;
        if (this.userPgAnswers[q.id] === q.ans) {
          correctCount++;
        }
      }
    });

    const badge = document.getElementById("pg-score-badge");
    if (badge) {
      const scorePercent = Math.round((correctCount / questions.length) * 100);
      badge.innerHTML = `
        <span class="score-num">${correctCount} / ${questions.length}</span>
        <span class="score-label">Benar (${scorePercent}%)</span>
      `;
    }
  }

  resetPgQuiz() {
    this.userPgAnswers = {};
    this.renderPgQuiz("pg-quiz-container");
  }

  renderBsQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !this.bab10) return;

    const questions = this.bab10.bsQuestions || [];
    let html = `
      <div class="quiz-header-card">
        <div class="quiz-info">
          <h3>⚖️ Kuis Benar atau Salah (True / False): 10 Soal Analisis</h3>
          <p>Tentukan apakah pernyataan berikut Benar atau Salah secara kaidah ilmu informatika.</p>
        </div>
        <div class="quiz-score-badge" id="bs-score-badge">
          0 / ${questions.length} Selesai
        </div>
      </div>
      <div class="quiz-list">
    `;

    questions.forEach((q, idx) => {
      const selected = this.userBsAnswers[q.id];
      html += `
        <div class="quiz-item-card" id="bs-card-${q.id}">
          <div class="quiz-q-num">Pernyataan ${idx + 1} dari ${questions.length}</div>
          <div class="quiz-q-text">${q.q}</div>
          <div class="bs-btn-group">
            <button type="button" class="btn-bs ${selected !== undefined ? (q.ans === true ? 'btn-bs-correct' : (selected === true ? 'btn-bs-wrong' : '')) : ''}" 
                    onclick="window.quizEngine.submitBsAnswer(${q.id}, true)">
              ✅ BENAR
            </button>
            <button type="button" class="btn-bs ${selected !== undefined ? (q.ans === false ? 'btn-bs-correct' : (selected === false ? 'btn-bs-wrong' : '')) : ''}" 
                    onclick="window.quizEngine.submitBsAnswer(${q.id}, false)">
              ❌ SALAH
            </button>
          </div>
          <div class="quiz-explanation" id="bs-exp-${q.id}" style="${selected !== undefined ? 'display:block;' : 'display:none;'}">
            <strong>💡 Penjelasan:</strong> ${q.exp}
          </div>
        </div>
      `;
    });

    html += `
      </div>
      <div class="quiz-actions-footer">
        <button type="button" class="btn btn-secondary" onclick="window.quizEngine.resetBsQuiz()">🔄 Ulangi Soal Benar/Salah</button>
      </div>
    `;

    container.innerHTML = html;
  }

  submitBsAnswer(qId, val) {
    if (this.userBsAnswers[qId] !== undefined) return;
    this.userBsAnswers[qId] = val;
    this.renderBsQuiz("bs-quiz-container");
  }

  resetBsQuiz() {
    this.userBsAnswers = {};
    this.renderBsQuiz("bs-quiz-container");
  }

  renderSymbolMatch(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !this.bab10) return;

    const list = this.bab10.symbolQuestions || [];
    let html = `
      <div class="symbols-challenge-grid">
        ${list.map(item => `
          <div class="symbol-challenge-card">
            <div class="symbol-chal-num">Simbol #${item.no}</div>
            <div class="symbol-chal-shape">${item.shape}</div>
            <div class="symbol-chal-reveal">
              <button class="btn btn-sm btn-outline" onclick="this.nextElementSibling.classList.toggle('show'); this.textContent = this.textContent === '👁️ Lihat Jawaban' ? '🙈 Sembunyikan' : '👁️ Lihat Jawaban'">👁️ Lihat Jawaban</button>
              <div class="reveal-content">${item.ans}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    container.innerHTML = html;
  }
}

window.FlowchartQuizEngine = FlowchartQuizEngine;
