React Bookmark Manager
Project Overview

এই প্রজেক্টটি React এবং TailwindCSS ব্যবহার করে তৈরি করা হয়েছে। এর মূল উদ্দেশ্য হলো ইউজারকে একটি সুন্দর এবং ইন্টারেক্টিভ Bookmark Manager প্রদান করা, যেখানে ইউজার নতুন বু্কমার্ক যোগ করতে, সার্চ করতে, এবং কার্ড আকারে বু্কমার্ক দেখতে পারবে।

এই প্রজেক্টে কোন তৃতীয় পক্ষের লাইব্রেরি ব্যবহার করা হয়নি। সমস্ত ফিচার কেবল React ও TailwindCSS দিয়ে ইমপ্লিমেন্ট করা হয়েছে।

Features

Dynamic Greeting

শুরুর শুভেচ্ছা বার্তায় “Good Morning” অংশের সময় অনুযায়ী পরিবর্তন হবে:

সকাল: Morning

দুপুর: Noon

সন্ধ্যা: Evening

তারিখ Day, Month Date ফরম্যাটে দেখাবে। যেমন: Monday, Nov 10

Add New Bookmark

ইউজার ইনপুট ফিল্ড পূরণ করে নতুন বু্কমার্ক যোগ করতে পারবে।

Form Validation:

কোনো ফিল্ড ফাঁকা রাখা যাবে না।

Website URL সঠিক ফরম্যাটে থাকতে হবে।

Password কমপক্ষে ৬ অক্ষরের হতে হবে।

Field-Level Error Messages দেখানো হবে।

Clear Button ফর্ম রিসেট করবে।

Bookmark Display

সার্চ ফিল্ডের নিচে Grid View তে সমস্ত বু্কমার্ক দেখাবে।

প্রতিটি কার্ডে থাকবে:

Name (Website URL থেকে জেনারেট করা)

Category

Website URL

Username

Password (ডিফল্ট Dotted, Reveal বাটন দিয়ে Toggle সম্ভব)

Icon তৈরি করা হয়েছে Domain এর প্রথম দুটি অক্ষর এবং সিলেক্ট করা কালার অনুযায়ী।

Search Functionality

সার্চ ফিল্ডে যেকোনো কীওয়ার্ড লিখলে Grid View অনুযায়ী ফলাফল দেখাবে।

সার্চ করা কীওয়ার্ড Name এবং URL উভয়ের সাথে মিলিয়ে দেখানো হবে।

যদি কোনো ফলাফল না পাওয়া যায়, সুন্দরভাবে "Not Found" বার্তা দেখাবে।

Sorting Feature

সার্চ ফিল্ডের পাশে Sort By বাটন আছে।

ইউজার Sort By ক্লিক করে Date বা Name অনুযায়ী Ascending / Descending অর্ডারে সাজাতে পারবে।

Component Organization

সকল Component লজিক্যালি ফিচার অনুযায়ী আলাদা করা হয়েছে।

কোডের Structure পরিষ্কার এবং Organized।

Tech Stack

React - Frontend framework

TailwindCSS - Styling

Vite - Project setup & bundling

Notes

কোন Third-Party লাইব্রেরি ব্যবহার করা হয়নি।

সব ফিচার React + TailwindCSS দিয়ে ইমপ্লিমেন্ট করা হয়েছে।

UI, Typography, Colors Template অনুযায়ী রাখা হয়েছে।
