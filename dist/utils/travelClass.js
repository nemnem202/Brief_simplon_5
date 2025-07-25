import { standing } from "../data/data";
export class TravelClass {
    getPrice(distance) {
        return this.pricePerKm * distance;
    }
    static createInstance(value) {
        switch (value) {
            case "economy":
                return new EconomyClass();
            case "buisness":
                return new BusinessClass();
            case "first":
                return new FirstClass();
            default:
                throw new Error("Unknown travel class");
        }
    }
}
export class EconomyClass extends TravelClass {
    value = "economy";
    label = "Économie";
    pricePerKm = standing.find(deepPockets => deepPockets.value === "economy").pricePerKm;
}
export class BusinessClass extends TravelClass {
    value = "buisness";
    label = "Affaires";
    pricePerKm = standing.find(deepPockets => deepPockets.value === "buisness").pricePerKm;
}
export class FirstClass extends TravelClass {
    value = "first";
    label = "Première classe";
    pricePerKm = standing.find(deepPockets => deepPockets.value === "first").pricePerKm;
}
