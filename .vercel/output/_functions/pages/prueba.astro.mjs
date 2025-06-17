import { c as createComponent, r as renderTemplate, b as renderHead } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Prueba = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-mq6tx4r2> <head><meta charset="UTF-8"><title>Asignador de Actividades</title><script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf.plugin.autotable.min.js" defer><\/script>', `</head> <body data-astro-cid-mq6tx4r2> <div class="header" data-astro-cid-mq6tx4r2> <h2 style="margin-right: 2rem;" data-astro-cid-mq6tx4r2>Asignaci\xF3n</h2> <a href="/dashboard" style="margin-right: 1.5rem;" data-astro-cid-mq6tx4r2>Dashboard</a> <a href="/sorteo" data-astro-cid-mq6tx4r2>Sorteo</a> <form action="/api/auth/signout" method="post" style="margin-left: auto;" data-astro-cid-mq6tx4r2> <button type="submit" data-astro-cid-mq6tx4r2>Salir</button> </form> </div> <div data-astro-cid-mq6tx4r2></div> <div class="main" data-astro-cid-mq6tx4r2> <div class="left" data-astro-cid-mq6tx4r2> <h3 data-astro-cid-mq6tx4r2>Trabajadores</h3> <input id="workerInput" placeholder="Nombre del trabajador" data-astro-cid-mq6tx4r2> <button onclick="addWorker()" data-astro-cid-mq6tx4r2>Agregar Trabajador</button> <ul id="workerList" class="list" data-astro-cid-mq6tx4r2></ul> <h3 data-astro-cid-mq6tx4r2>Actividades</h3> <input id="taskInput" placeholder="Descripci\xF3n de actividad" data-astro-cid-mq6tx4r2> <button onclick="addTask()" data-astro-cid-mq6tx4r2>Agregar Actividad</button> <ul id="taskList" class="list" data-astro-cid-mq6tx4r2></ul> <button onclick="assignTasks()" data-astro-cid-mq6tx4r2>Asignar Actividades</button> </div> <div class="right" data-astro-cid-mq6tx4r2> <div id="loading" data-astro-cid-mq6tx4r2> <div class="spinner" data-astro-cid-mq6tx4r2></div> <p data-astro-cid-mq6tx4r2>Asignando actividades...</p> </div> <div id="results" data-astro-cid-mq6tx4r2></div> <button id="downloadBtn" onclick="downloadPDF()" style="display:none; margin-top: 1rem;" data-astro-cid-mq6tx4r2>Descargar Reporte PDF</button> </div> </div> <script type="module">
      let workers = [];
      let tasks = [];
      let lastAssignments = {};

      function updateLists() {
        document.getElementById('workerList').innerHTML = workers.map(w => \`<li>\${w}</li>\`).join('');
        document.getElementById('taskList').innerHTML = tasks.map(t => \`<li>\${t}</li>\`).join('');
      }

      window.addWorker = function () {
        const input = document.getElementById('workerInput');
        if (input.value.trim()) {
          workers.push(input.value.trim());
          input.value = '';
          updateLists();
        }
      }

      window.addTask = function () {
        const input = document.getElementById('taskInput');
        if (input.value.trim()) {
          tasks.push(input.value.trim());
          input.value = '';
          updateLists();
        }
      }

      window.assignTasks = function () {
        const resultsDiv = document.getElementById('results');
        const loadingDiv = document.getElementById('loading');
        const downloadBtn = document.getElementById('downloadBtn');

        resultsDiv.innerHTML = '';
        downloadBtn.style.display = 'none';

        if (workers.length === 0 || tasks.length === 0) {
          resultsDiv.innerHTML = '<p style="color:red">Debe ingresar al menos un trabajador y una actividad.</p>';
          return;
        }

        loadingDiv.style.display = 'block';

        setTimeout(() => {
          loadingDiv.style.display = 'none';

          const shuffledTasks = [...tasks].sort(() => Math.random() - 0.5);
          const assignments = {};
          workers.forEach(w => assignments[w] = []);

          let taskIndex = 0;
          while (taskIndex < shuffledTasks.length) {
            for (let w of workers) {
              if (taskIndex >= shuffledTasks.length) break;
              assignments[w].push(shuffledTasks[taskIndex]);
              taskIndex++;
            }
          }

          lastAssignments = assignments;

          let output = '<h3>Asignaciones:</h3><ul>';
          for (let [worker, tList] of Object.entries(assignments)) {
            output += \`<li><strong>\${worker}</strong>: \${tList.join(', ')}</li>\`;
          }
          output += '</ul>';
          resultsDiv.innerHTML = output;

          downloadBtn.style.display = 'inline-block';
        }, 3000);
      }

      window.downloadPDF = function () {
        if (!window.jspdf || !window.jspdf.jsPDF) {
          alert('jsPDF a\xFAn no est\xE1 cargado. Intenta de nuevo en unos segundos.');
          return;
        }

        const doc = new window.jspdf.jsPDF();
        doc.setFontSize(16);
        doc.text('Reporte de Asignaci\xF3n de Actividades', 20, 20);

        let y = 30;
        doc.setFontSize(12);

        doc.text('Trabajadores:', 20, y);
        workers.forEach(w => {
          y += 7;
          doc.text(\`- \${w}\`, 25, y);
        });

        y += 10;
        doc.text('Actividades:', 20, y);
        tasks.forEach(t => {
          y += 7;
          doc.text(\`- \${t}\`, 25, y);
        });

        y += 10;
        doc.text('Asignaciones:', 20, y);
        const today = new Date();
        const formattedDate = today.toLocaleDateString('es-EC');
        const tableData = Object.entries(lastAssignments).map(([worker, tList]) => ({
          trabajador: worker,
          actividades: tList.join(', '),
          fecha: formattedDate
        }));

        doc.autoTable({
          startY: y + 5,
          head: [['Trabajador', 'Actividades asignadas', 'Fecha']],
          body: tableData.map(row => [row.trabajador, row.actividades, row.fecha]),
          styles: {
            fontSize: 10,
            cellPadding: 3,
            textColor: [255, 255, 255],
            fillColor: [11, 20, 55]
          },
          headStyles: {
            fillColor: [29, 53, 87],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
          },
          alternateRowStyles: { fillColor: [20, 30, 70] }
        });

        doc.save('asignaciones.pdf');
      }

      updateLists();
    <\/script> </body> </html>`], ['<html lang="es" data-astro-cid-mq6tx4r2> <head><meta charset="UTF-8"><title>Asignador de Actividades</title><script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf.plugin.autotable.min.js" defer><\/script>', `</head> <body data-astro-cid-mq6tx4r2> <div class="header" data-astro-cid-mq6tx4r2> <h2 style="margin-right: 2rem;" data-astro-cid-mq6tx4r2>Asignaci\xF3n</h2> <a href="/dashboard" style="margin-right: 1.5rem;" data-astro-cid-mq6tx4r2>Dashboard</a> <a href="/sorteo" data-astro-cid-mq6tx4r2>Sorteo</a> <form action="/api/auth/signout" method="post" style="margin-left: auto;" data-astro-cid-mq6tx4r2> <button type="submit" data-astro-cid-mq6tx4r2>Salir</button> </form> </div> <div data-astro-cid-mq6tx4r2></div> <div class="main" data-astro-cid-mq6tx4r2> <div class="left" data-astro-cid-mq6tx4r2> <h3 data-astro-cid-mq6tx4r2>Trabajadores</h3> <input id="workerInput" placeholder="Nombre del trabajador" data-astro-cid-mq6tx4r2> <button onclick="addWorker()" data-astro-cid-mq6tx4r2>Agregar Trabajador</button> <ul id="workerList" class="list" data-astro-cid-mq6tx4r2></ul> <h3 data-astro-cid-mq6tx4r2>Actividades</h3> <input id="taskInput" placeholder="Descripci\xF3n de actividad" data-astro-cid-mq6tx4r2> <button onclick="addTask()" data-astro-cid-mq6tx4r2>Agregar Actividad</button> <ul id="taskList" class="list" data-astro-cid-mq6tx4r2></ul> <button onclick="assignTasks()" data-astro-cid-mq6tx4r2>Asignar Actividades</button> </div> <div class="right" data-astro-cid-mq6tx4r2> <div id="loading" data-astro-cid-mq6tx4r2> <div class="spinner" data-astro-cid-mq6tx4r2></div> <p data-astro-cid-mq6tx4r2>Asignando actividades...</p> </div> <div id="results" data-astro-cid-mq6tx4r2></div> <button id="downloadBtn" onclick="downloadPDF()" style="display:none; margin-top: 1rem;" data-astro-cid-mq6tx4r2>Descargar Reporte PDF</button> </div> </div> <script type="module">
      let workers = [];
      let tasks = [];
      let lastAssignments = {};

      function updateLists() {
        document.getElementById('workerList').innerHTML = workers.map(w => \\\`<li>\\\${w}</li>\\\`).join('');
        document.getElementById('taskList').innerHTML = tasks.map(t => \\\`<li>\\\${t}</li>\\\`).join('');
      }

      window.addWorker = function () {
        const input = document.getElementById('workerInput');
        if (input.value.trim()) {
          workers.push(input.value.trim());
          input.value = '';
          updateLists();
        }
      }

      window.addTask = function () {
        const input = document.getElementById('taskInput');
        if (input.value.trim()) {
          tasks.push(input.value.trim());
          input.value = '';
          updateLists();
        }
      }

      window.assignTasks = function () {
        const resultsDiv = document.getElementById('results');
        const loadingDiv = document.getElementById('loading');
        const downloadBtn = document.getElementById('downloadBtn');

        resultsDiv.innerHTML = '';
        downloadBtn.style.display = 'none';

        if (workers.length === 0 || tasks.length === 0) {
          resultsDiv.innerHTML = '<p style="color:red">Debe ingresar al menos un trabajador y una actividad.</p>';
          return;
        }

        loadingDiv.style.display = 'block';

        setTimeout(() => {
          loadingDiv.style.display = 'none';

          const shuffledTasks = [...tasks].sort(() => Math.random() - 0.5);
          const assignments = {};
          workers.forEach(w => assignments[w] = []);

          let taskIndex = 0;
          while (taskIndex < shuffledTasks.length) {
            for (let w of workers) {
              if (taskIndex >= shuffledTasks.length) break;
              assignments[w].push(shuffledTasks[taskIndex]);
              taskIndex++;
            }
          }

          lastAssignments = assignments;

          let output = '<h3>Asignaciones:</h3><ul>';
          for (let [worker, tList] of Object.entries(assignments)) {
            output += \\\`<li><strong>\\\${worker}</strong>: \\\${tList.join(', ')}</li>\\\`;
          }
          output += '</ul>';
          resultsDiv.innerHTML = output;

          downloadBtn.style.display = 'inline-block';
        }, 3000);
      }

      window.downloadPDF = function () {
        if (!window.jspdf || !window.jspdf.jsPDF) {
          alert('jsPDF a\xFAn no est\xE1 cargado. Intenta de nuevo en unos segundos.');
          return;
        }

        const doc = new window.jspdf.jsPDF();
        doc.setFontSize(16);
        doc.text('Reporte de Asignaci\xF3n de Actividades', 20, 20);

        let y = 30;
        doc.setFontSize(12);

        doc.text('Trabajadores:', 20, y);
        workers.forEach(w => {
          y += 7;
          doc.text(\\\`- \\\${w}\\\`, 25, y);
        });

        y += 10;
        doc.text('Actividades:', 20, y);
        tasks.forEach(t => {
          y += 7;
          doc.text(\\\`- \\\${t}\\\`, 25, y);
        });

        y += 10;
        doc.text('Asignaciones:', 20, y);
        const today = new Date();
        const formattedDate = today.toLocaleDateString('es-EC');
        const tableData = Object.entries(lastAssignments).map(([worker, tList]) => ({
          trabajador: worker,
          actividades: tList.join(', '),
          fecha: formattedDate
        }));

        doc.autoTable({
          startY: y + 5,
          head: [['Trabajador', 'Actividades asignadas', 'Fecha']],
          body: tableData.map(row => [row.trabajador, row.actividades, row.fecha]),
          styles: {
            fontSize: 10,
            cellPadding: 3,
            textColor: [255, 255, 255],
            fillColor: [11, 20, 55]
          },
          headStyles: {
            fillColor: [29, 53, 87],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
          },
          alternateRowStyles: { fillColor: [20, 30, 70] }
        });

        doc.save('asignaciones.pdf');
      }

      updateLists();
    <\/script> </body> </html>`])), renderHead());
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/prueba.astro", void 0);

const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/prueba.astro";
const $$url = "/prueba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prueba,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
