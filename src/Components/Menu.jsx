import Header from "./Header";
import MenuOpt from "./MenuOpt";

function Menu() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container-menu">
          <div className="menu-cover-box"></div>
          <div className="menu-option-box">
            <MenuOpt
              title="Eggs & Bacon"
              desc="Slab bacon, eggs, and wheat toast. Served with hash brown casserole and smoked tomato salsa."
            />
            <MenuOpt
              title="Waffles"
              desc="These extra light and fluffy waffles are a delicious breakfast recipe made with simple ingredients and an easy technique you'll love!"
            />
            <MenuOpt
              title="French Toast"
              desc="The best French toast ever is made with fluffy bread like brioche or challah, and swimming in sugar and cinnamon."
            />

            <MenuOpt
              title="Oatmeal"
              desc="Our healthy breakfast oatmeal treats are one of my family’s favorite easy meal prep recipes, and they can be vegan and gluten free."
            />
            <MenuOpt
              title="Toutons"
              desc="Yummy toutons, or fried bread dough, is a traditional Newfoundland recipe that is super simple to prepare, but incredibly delicious."
            />
            <MenuOpt
              title="Bagel"
              desc="Bagels with Eggs are made on a sheet pan! Flavored with cheese, avocado salsa, these bagel eggs make the best breakfast sandwich!"
            />
            <MenuOpt
              title="Big Gary"
              desc="Tasty, delicious, and has me craving more on the first bite.To juicy, mouthwatering,tasty, and everything you’d ever want to savor. This burger is pure deliciousness!"
            />
            <MenuOpt
              title="Taters"
              desc="These are not your average scalloped potatoes, as there are delicious caramelized onions layered in between the sliced potatoes and cheese. Our taters are flavorful and appetizing!"
            />
            <MenuOpt
              title="Soup"
              desc="So delicious, so comforting and just so creamy. Best of all, this is made in 30 min from start to finish - so quick and easy!"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Menu;
