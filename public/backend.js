export async function BookData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
        throw new Error("Ошибка");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// export async function BookData() {
//   const res = await fetch('data.json');

//   if (!response.ok) {
//     throw new Error("Ошибка");
//   }
  
//   const data = await getData()
//   console.log(data);    
//   return res.json()
// }

// export default function BookData() {
//   getData();
//  return( <main>{data}</main> )
// }


// // app/page.tsx
// async function getData() {
//   const res = await fetch('https://api.example.com/...')
//   // Возвращаемое значение не сериализуется,
//   // что позволяет возвращать Date, Map, Set и др.

//   if (!res.ok) {
//     // Это активирует ближайшего предохранителя `error.js`
//     throw new Error('Провал получения данных')
//   }

//   return res.json()
// }

// export default async function Page() {
//   const data = await getData()

//   return <main></main>
// }