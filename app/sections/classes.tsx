"use client";

export default function Classes() {
  const Image1Url = "/Images/photo-1526506118085-60ce8714f8c5.avif";
  const Image2Url = "/Images/photo-1601986313624-28c11ac26334.avif";
  const Image3Url = "/Images/photo-1692369608191-005af0051fe2.avif";

  const cardStyle = {
    transition: "flex 0.8s ease",
  };

  //TODO:
  //    [ ] Make Components of the Cards and the Cards Gallery
  //    [ ] Make it Map the cards out
  //    [ ] Will the find Button load a modal or a different page?
  //    [ ] When click on a card will it open a modal or dynamic page?
  return (
    <section id="Classes" className="min-h-screen bg-(--bg) w-vw">
      <div className="pt-8 px-4 pb-12 space-y-16 w-full">
        {/* Clasess Section */}
        <div className="max-h-1/2 w-full  h-full text-(--textLight) ">
          {/* Classes Header */}
          <div className="flex justify-between mb-6 items-center">
            <h3 className="font-bold uppercase text-3xl text-(--h1)">
              Classes
            </h3>
            <a href="#" className="text-sm">
              {" "}
              View All
            </a>
          </div>

          {/* Cards */}
          <div className="flex flex-row w-full h-80  ">
            {/* Card 1 */}
            {/* Background Image */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image1Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image2Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover "
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image3Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image2Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="max-h-1/2 h-full text-(--textLight) ">
          {/* Classes Header */}
          <div className="flex justify-between mb-6 items-center">
            <h3 className="font-bold uppercase text-3xl text-(--h1)">Events</h3>
            <a href="#" className="text-sm">
              {" "}
              View All
            </a>
          </div>

          {/* Cards */}
          <div className="flex flex-row w-full h-80 ">
            {/* Card 1 */}
            {/* Background Image */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image1Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image2Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover "
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image3Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className=" flex-1 hover:flex-2 inset-0 bg-no-repeat bg-center
             bg-cover"
              style={Object.assign({}, cardStyle, {
                backgroundImage: `url(${Image2Url})`,
              })}
            >
              {/* Gradient */}
              <div className=" bg-linear-to-b h-full from-neutral-50/0 to-(--bg) flex items-end">
                {/* Content */}
                <p className="py-4 px-6">Card 1 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
