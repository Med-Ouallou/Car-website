const carsContainer = document.getElementById("carsContainer");

function renderCars(carsArray) {
    carsContainer.innerHTML = "";

    carsArray.forEach(car => {
        const card = document.createElement("div");
        card.className = "bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition group";

        card.innerHTML = `
                        <div class="relative">
                            <img class="w-full h-48 object-cover rounded-t-xl" src="${car.image}"
                                alt="${car.name}">
                            <div class="absolute top-3 right-3 flex gap-2">
                                <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                    <i class="ri-heart-line text-gray-600"></i>
                                </button>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="flex items-start justify-between mb-2">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-800">${car.name}</h3>
                                    <p class="text-sm text-gray-500">${car.category}</p>
                                </div>
                                <div class="flex items-center gap-1 text-sm">
                                    <i class="ri-star-fill text-yellow-400"></i>
                                    <span class="font-semibold">4.7</span>
                                </div>
                            </div>

                            <div class="flex items-center gap-4 my-3 text-xs text-gray-600">
                                <div class="flex items-center gap-1">
                                    <i class="ri-user-line"></i>
                                    <span>5 seats</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <i class="ri-settings-line"></i>
                                    <span>Auto</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <i class="ri-gas-station-line"></i>
                                    <span>Hybrid</span>
                                </div>
                            </div>

                            <div class="flex items-center justify-between pt-3 border-t border-gray-200">
                                <div>
                                    <span class="text-2xl font-bold text-blue-600">$${car.pricePerDay}</span>
                                    <span class="text-sm text-gray-500">/day</span>
                                </div>
                                <button
                                    class="py-2 px-4 text-white text-sm font-medium rounded-lg  ${car.available ? "bg-blue-600" : "bg-gray-400"} ${!car.available ? "disabled" : ""} hover:bg-blue-700 transition">
                                        ${car.available ? "Rent Now" : "Not Available"}
                                </button>
                            </div>
                        </div>`;

        carsContainer.appendChild(card);
    });
}

renderCars(cars);