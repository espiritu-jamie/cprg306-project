import Link from "next/link";


export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold my-6">
        What&apos;s In My Pantry?
      </h1>

      <div className="card bg-stone-100 shadow-xl p-6">
        <p className="mb-4">
          Discover the smart way to manage your pantry and inspire your next meal!
        </p>

        <p className="mb-4">
        &quot;What&apos;s In My Pantry?&quot; is an innovative application designed to simplify how you track and organize your pantry items. With an easy sign-in using your GitHub account, you can swiftly start managing your pantry like never before.
        </p>

        <h2 className="text-2xl font-bold mt-4">
          Effortless Pantry Management
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>Add Items with Ease: Quickly add items to your pantry list. Include essential details like quantity, category, purchase date, and expiry date.</li>
          <li>Organize Like a Pro: Categorize your pantry items for effortless organization. Whether it&apos;s produce, dairy, or snacks, everything finds its place.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">
          Stay Informed and Prepared
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>Track Expiry Dates: Stay ahead of expiry dates, reducing waste and ensuring fresh ingredients for your meals.</li>
          <li>Purchase Date Recording: Keep a tab on when items were bought, helping you to use older items first and keep your pantry up-to-date.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">
          Meal Inspiration at Your Fingertips
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>Suggested Meals and Recipes: Click on an item, and we&apos;ll suggest delicious meals and recipes using it. It&apos;s like having a personal chef in your pantry!</li>
          <li>Discover New Favorites: Explore new recipes and meal ideas based on what you already have. Say goodbye to the &quot;What&apos;s for dinner?&quot; dilemma!</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">
          Consume, Update, Repeat
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>Track Consumption: Easily delete items from your list once consumed, keeping your pantry list accurate and current.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">
          Your Pantry, Your Way
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>Custom Sorting: Sort through your items based on name, category, purchase, or expiry dates. Find what you need, when you need it, without the hassle.</li>
        </ul>

        <p className="mt-4">
          &quot;What&apos;s In My Pantry?&quot; is more than just an application; it&apos;s your companion in making everyday cooking fun, efficient, and creative. Sign in today and transform the way you manage your pantry and meals!
        </p>
      </div>

      <div className="text-center mt-10">
        <Link href="/project">
          <button className="btn btn-primary text-lg my-6">Start Now</button>
        </Link>
      </div>
    </main>
  );
}

