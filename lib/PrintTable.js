function PrintTable() {
    PrintTable.prototype.table = function(num){
        if(num === null || num===''|| num<=0)
            return num
        const data = []
        for(let i=1; i<=10; i++){
            data.push(num*i)
        }
        return data.toString()
    }
}
module.exports = PrintTable