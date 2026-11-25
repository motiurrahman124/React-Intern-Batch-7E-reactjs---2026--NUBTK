import { useEffect, useState } from "react"

function About() {

    const [products, setProducts] = useState([])
    console.log("🚀 ~ About ~ products:", products)

    const students = [
        {
            name: "Sabbir Hossain",
            id: 6546,
            department: "CSE",
            section: "7E"
        },
        {
            name: "Sabbir Hossain -2",
            id: 786,
            department: "EEE",
            section: "7E"
        },
        {
            name: "Sabbir Hossain -3",
            id: 76986,
            department: "BBA",
            section: "7E"
        },
        {
            name: "Sabbir Hossain - 4",
            id: 7867,
            department: "BBA",
            section: "7E"
        }
    ]

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data=> setProducts(data.products));
    }, [])

    return (
        <div className="px-10 py-20">
            {/* <h1>This is about page</h1> */}

            <div className="flex flex-wrap gap-5">
                {
                    students.map((student, idx) => (
                        <div className="border rounded-lg p-5 bg-amber-100 space-y-3">
                            <h1 className="text-lg font-semibold">Name: {student.name}</h1>
                            <p>ID: {student.id}</p>
                            <p>Deprtment: {student.department}</p>
                            <p>Section: {student.section}</p>
                        </div>
                    ))
                }

            </div>

            <div className="flex flex-wrap gap-5 mt-10">
                {
                    products.map((product, idx) => (
                        <div className="border rounded-lg p-5 bg-amber-100 space-y-3">
                            <h1 className="text-lg font-semibold">Product Name: {product.title}</h1>
                            {/* <p>ID: {student.id}</p>
                            <p>Deprtment: {student.department}</p>
                            <p>Section: {student.section}</p> */}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default About