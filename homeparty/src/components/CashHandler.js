
const data = {};
for (let i=0; i<5; i++){
    data[i] = {'cash': 150, 'buildingWorth': 0}
}

class CashHandler{
    static getData(){
        return(data);
    }

    static getNet(idx){
        return(data[idx].cash+data[idx].buildingWorth*0.8);
    }

    static getCash(idx){
        return data[idx].cash;
    }

    static setCash(idx, value){
        data[idx].cash += value;
    }

    static setBuildingWorth(idx, value){
        data[idx].buildingWorth += value;
    }
    
    static getRank(idx){
        let sortable = [];
        for (let i=0; i<5; i++){
            sortable.push([i, CashHandler.getNet(i)]);
        }
        sortable.sort(function(a, b) {
            return b[1] - a[1];
          });
        
        for (let i=0; i<5; i++){
            if (sortable[i][0]===idx){
                return (i+1);
            }
        }
    }
}

export default CashHandler;