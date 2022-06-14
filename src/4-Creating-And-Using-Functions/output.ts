import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string;
}

export default async function updateOutput(id:string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map((p) => {
    const productHtml = `
    <span class="card-id">#${p.id}</span>
      <i class="card-icon ${p.icon} fa-lg"></i>
    <span class="card-name">${p.name}</span>
  `;
  const cardHtml = `
  <li>
    <div class="card">
      <div class="card-content">
        <div class="content">
        ${productHtml}
        </div>
      </div>
    </div>
  </li>
  `;
  return cardHtml;
});
let productsHtml = `<ul>${items.join('')}</ul>`;
return productsHtml;
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products
}
// Defined after, but we can call it before since compiler
// will move definition to top
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted (goes to top of page upon compile)
  function displayProductInfo(id: number,name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10,'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7,11));
  // Hoisted because function declaration
  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  // Not hoisted because const, function is the expression
  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
    console.log(addNumbersExpression(7,111));

    const sampleProducts = [
      {
        id: 10,
        name: 'Pizza slice',
        icon: 'fas fa-pizza-slice',
      },
      {
        id: 20,
        name: 'Ice cream',
        icon: 'fas fa-ice-cream',
      },
      {
        id: 30,
        name: 'Cheese',
        icon: 'fas fa-cheese',
      },
    ];

    function getProductNames(): string[] {
      return sampleProducts.map((p) => p.name);
    }

    console.log(`${prefix} return array`);
    console.log(getProductNames());

    function getProductById(id: number):
    ProductType | undefined {
      return sampleProducts.find(p => id === p.id)
    }
    console.log(`${prefix} return ProductType`);
    console.log(getProductById(10));

    function displayProducts(products: ProductType[]): void {
      const productNames = products.map((p) => {
        const name = p.name.toLowerCase();
        return name;
      });
      const msg = `Sample products include: ${productNames.join(', ')}`;
      
      console.log(`${prefix} return void`)
      console.log(msg);
    }

    displayProducts(sampleProducts);
}