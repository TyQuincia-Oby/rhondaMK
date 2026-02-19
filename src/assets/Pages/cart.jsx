

import { 
    useReactTable, 
    getCoreRowModel, 
    getPaginationRowModel, 
    getSortedRowModel
 } from "@tanstack/react-table"

export function Cart () {
    // const tableInstance = useReactTable({
    //     columns,
    //     data,
    //     getCoreRowModel: getCoreRowModel(),
    //     getPaginationRowModel: getPaginationRowModel(),
    //     getSortedRowModel: getSortedRowModel()
    // })

    return(
        <>
        <h1>Shopping Cart</h1>
            <table>
                <thead>
                    <strong> Product </strong>
                </thead>
                <tbody>
                    Lipstick
                </tbody>
            </table>
        </>
    )
}