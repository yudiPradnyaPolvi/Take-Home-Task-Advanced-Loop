console.log("Take Home Task")

console.log("Tugas Nomor 1")
/*

terdapat sebuah array seperti berikut:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

jika hasil yang perlu didapat dari 
penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
*/
/*
const angka1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const angka2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result =[]
for (let i=0;i<=angka1.length;i++){
    let str =""
    for (let j =0; j <=angka2.length;j++){
    str +=(angka1[i]+angka2[j])+""
         
       if (str===17){
        result.push(angaka1[i])
        }
        
       console.log (str)
        
    }
    console.log (result)
}
*/
const angka1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const angka2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaTotal
const result =[]
for (let i =0;i<angka1.length;i++){
   

    for (let j =0; j <angka2.length;j++){
       
        angkaTotal=(angka1[i]+angka2[j])+""
        
        if (angkaTotal==17){
            console.log (angka1[i]+"+"+angka2[j]+"="+angkaTotal)
            result.push(angka1[i],angka2[j])
            let pasangan = result.length/2
            console.log("nomor pasangan yang bernilai 17 adalah "+pasangan)
            
            
            }
            
    }
}

console.log ("jadi penjumlahan yang menghasilkan 17, yaitu sebagai berikut"  )
console.log(result)
console.log ("=====================================")

console.log("Tugas Nomor 2")
let huruf  = "hello"
let huruf1 ="world"  
const results=[]
for (i=1;i<huruf.length;i++){
    for (j=1;j<huruf1.length;j++){
        if (huruf [i]===huruf1[j]){
            results.push (huruf[i])
            console.log(huruf[i]+"==="+huruf1[j])
        }
    }
}
console.log ("jumlah huruf yang sama adalah "+results.length)
console.log ("jadi huruf yang sama, yaitu sebagai berikut")
console.log(results)
console.log ("=====================================")