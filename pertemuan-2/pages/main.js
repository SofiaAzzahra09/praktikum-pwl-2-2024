let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center gap-4 p-4 mb-2 bg-white shadow-md rounded-lg`;
   task.innerHTML = `
         <p class="text-lg font-semibold">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="px-3 py-1 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-colors btn-selesai">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="px-3 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition-colors btn-hapus">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}