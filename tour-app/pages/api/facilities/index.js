import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const demoHotel = await Hotel.findById("654eb5ee282e40a9ee85a0bb");
    const facilities = demoHotel.facilities;

    // const facilities = await Hotel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "Achha Lagta hai !", facilities });
  }
}
