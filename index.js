import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      <section className="bg-yellow-100 p-6 rounded-2xl text-center shadow-md">
        <h1 className="text-3xl font-bold">VIP Fashion</h1>
        <p className="text-lg mt-2">নতুন কটি ও পাঞ্জাবির কালেকশন এখনই দেখুন!</p>
        <Button className="mt-4">এখনই অর্ডার করুন</Button>
      </section>

      <section className="bg-red-100 p-4 rounded-xl text-center">
        <h2 className="text-xl font-semibold">ঈদ অফার!</h2>
        <p className="text-sm">সব পাঞ্জাবি ও কটির উপর ২০% ছাড়</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">আমাদের কালেকশন</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="rounded-xl">
              <CardContent className="p-2">
                <div className="bg-gray-200 h-32 mb-2 rounded" />
                <p className="font-medium">পাঞ্জাবি #{item}</p>
                <p className="text-sm">৳১২০০</p>
                <Button size="sm" className="mt-2 w-full">কার্টে যোগ করুন</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">কাস্টমার রিভিউ</h2>
        <div className="space-y-2">
          <Card className="p-4">
            <p className="font-semibold">রাহুল ইসলাম</p>
            <p className="text-sm">"পাঞ্জাবির কোয়ালিটি চমৎকার, খুবই আরামদায়ক। ধন্যবাদ VIP Fashion!"</p>
          </Card>
          <Card className="p-4">
            <p className="font-semibold">সাবরিনা হক</p>
            <p className="text-sm">"কটির ডিজাইন এক কথায় অসাধারণ। আবার অর্ডার করবো ইনশাআল্লাহ।"</p>
          </Card>
        </div>
      </section>

      <section className="bg-blue-50 p-4 rounded-xl mt-4">
        <h2 className="text-xl font-bold mb-2">যোগাযোগ করুন</h2>
        <p className="text-sm">ফোন: ০১২৩৪৫৬৭৮৯০ | ফেসবুক: fb.com/vipfashion</p>
        <p className="text-sm mt-2">লাইভ চ্যাট: Messenger/WhatsApp ইন্টিগ্রেশন আসছে</p>
      </section>
    </div>
  );
}