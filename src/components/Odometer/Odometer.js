import React, { useEffect, useState } from 'react';
import './_odometer.scss';  // We'll define this later
import { clear } from '@testing-library/user-event/dist/clear';

const Odometer = () => {
    const max_array_len = 19
    const [ chars, setChars ] = useState(Array.from({length: max_array_len}, () => Math.random() < 0.5 ? 0 : 1))

    useEffect(() => {
        // const max_array_len = 19
        const title = Array.from("Design Technologist")
        let temp_chars = []
        //counter = 0
        // while (title.some(elem => typeof elem === 'string')) {
        //     console.log('has letters')
        // }
        const interval = setInterval(() => {
            temp_chars = Array.from({length: max_array_len}, () => Math.random() < 0.5 ? 0 : 1)
            setChars(prevChars => [...temp_chars]);
        }, 150)

        setTimeout(() => {
            clearInterval(interval)
            const loop = setInterval(() => {
                const indicies = temp_chars.map((elem, index) => {
                    return typeof elem == 'number' ? index : null
                }).filter(index => index !== null)

                console.log('index', indicies)
                const random_index = Math.floor(Math.random() * indicies.length)
                temp_chars[indicies[random_index]] = title[indicies[random_index]]
                // temp_chars[random_index] = title[random_index]
                setChars(prevChars => [...temp_chars]);
                if (temp_chars.every(elem => typeof elem == 'string')) {
                    clearInterval(loop)
                } else {
                    console.log(temp_chars)
                }
            }, 150)
        }, 2000)

        //let temp_chars = Array.from({length: max_array_len}, () => Math.random() < 0.5 ? 0 : 1)
        // const title = Array.from("Design Technologist")
        // while (temp_chars.length < max_array_len) {
        //     setInterval(() => {
        //         temp_chars.push(Math.random() < 0.5 ? 0 : 1)
        //         setChars([...temp_chars])
        //     }, 50)
        // }
        // const interval = setInterval(() => {
        //     if (temp_chars.length < max_array_len) {
        //         temp_chars.push(Math.random() < 0.5 ? 0 : 1)
        //     } else {
        //         const random_index = Math.floor(Math.random() * max_array_len)
        //         const random_binary = Math.random() < 0.5 ? 0 : 1
        //         //temp_chars = Array.from({length: max_array_len}, () => Math.random() < 0.5 ? 0 : 1)
        //         console.log(random_binary)
        //         temp_chars[random_index] = title[random_index]
        //         if (Number(temp_chars[random_index])) temp_chars[random_index] = random_binary
                
        //         //
                
        //         console.log(temp_chars)          
        //     }
        //     setChars(prevChars => [...temp_chars]);
        // }, 150)
        
        // setTimeout(() => {
        //     clearInterval(interval)
        // }, 15000)
        
        // return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        console.log('chars', chars.join(""))
    }, [chars])

    return(
        <div>
            {
                chars.join("")
            }
        </div>
    )
}

// const Odometer = ({ value }) => {
//   const [displayValue, setDisplayValue] = useState(value);

//   useEffect(() => {
//     // Animate from the current value to the new value
//     const increment = value > displayValue ? 1 : -1;

//     const interval = setInterval(() => {
//       setDisplayValue((prev) => {
//         if (prev === value) {
//           clearInterval(interval);
//           return prev;
//         }
//         return prev + increment;
//       });
//     }, 100); // Adjust this interval for faster or slower animation

//     return () => clearInterval(interval);
//   }, [value, displayValue]);

//   return (
//     <div className="odometer">
//       {displayValue
//         .toString()
//         .split('')
//         .map((digit, index) => (
//           <div key={index} className="odometer-digit">
//             {digit}
//           </div>
//         ))}
//     </div>
//   );
// };

export default Odometer;
