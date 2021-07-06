import bcrypt from "bcryptjs";

const data = {
  products: [
    {
      name: "JBL t-500",
      category: "Headphones",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "JBL",
      rating: 4.5,
      numReviews: 10,
      description:
        "JBL Pure Bass sound \n 1-button remote with microphone \n Tangle-free flat cable \n Lightweight and foldable design",
    },
    {
      name: "Bose 700",
      category: "Headphones",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Bose",
      rating: 4,
      numReviews: 9,
      description:
        "Powerful noise cancelling headphones: 11 levels of active noise cancelling let you enjoy music, podcasts, videos & calls without distractions \n Astonishing sound: Crisp, clear details. Deep, full bass. These wireless headphones produce exciting, lifelike sound that’s full and balanced at every volume level \n Unrivaled voice pickup: A revolutionary microphone system adapts to noisy and windy environments so your voice always sounds crystal clear on calls \n Keep your head up and hands free: With easy access to voice assistants like Alexa and Google Assistant for music, navigation, weather, and more, and intuitive touch control on the earcups — you can stay connected without reaching for your phone \n Premium design and comfort: With a lightweight stainless steel headband and earcups tilted for the perfect fit, you can comfortably wear these bluetooth headphones for hours \n Up to 20 hours of non-stop music: Get up to 20 hours of wireless battery life on a single charge One touch to listen to Spotify: Instantly listen to your last Spotify session or discover new music by tapping and holding the right earcup. Currently only available when using iOS devices with your headphones",
    },
    {
      name: "Bose Quietcomfort3",
      category: "Headphones",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Bose",
      rating: 4.5,
      numReviews: 17,
      description:
        "On-ear fit: Ear cups rest gently on your ears \n Bose noise reduction and quality sound for travel, work and home \n Comfortable, lightweight design with an on-ear fit: headphones rest gently on your ears \n Rechargeable lithium-ion battery: 25 hours average use per charge \n Fold-flat ear cups for easy storage in slim carrying case",
    },
    {
      name: "Hama Touch",
      category: "Headphones",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 150,
      brand: "Hama",
      rating: 4.5,
      numReviews: 14,
      description:
        "The perfect fit reduces unwanted exterior noise so that you can enjoy your music without being disturbed \n Allows simultaneous connection of the headset with two smartphones \n Integrated phone function with call answer button and microphone for smartphones \n Thanks to the integrated microphone you can easily switch between music playback and call answer. So you will no longer miss a call when listening to music. \n The integrated remote control allows you to take and end calls, to activate voice dialling and to individually control your music: play/pause/title forward/title backward (if supported by the phone) \n Padded headband for a comfortable listening experience also over long periods of use \n The headphones are equipped with an individually adjustable headband which adapts to the shape of your head \n The ear cups can be folded in which allows you to compactly store the headphones \n Soft ear cushions for your ultimate convenience \n Foldable, enabling space-saving, safe transportation \n The case protects your headphones when these are not in use",
    },
    {
      name: "Philips PH 805",
      category: "Headphones",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 102,
      brand: "Philips",
      rating: 4.5,
      numReviews: 12,
      description:
        "Active Noise Canceling (ANC). Lose yourself, not the music. Leave it all behind with Active Noise Canceling. Shut off the noise of a train or busy office at the touch of a button. If you're out and about, you can listen to your music and stay tuned to the noise of the street in Awareness Mode. \n 30 hours play time or talk time (25 hours with ANC on). On any trip, these headphones are up to the task. A single charge takes just 2 hours. You get 30 hours play time (or talk time) with Active Noise Canceling off, and 25 hours with it on. \n 40mm neodymium acoustic drivers for highly detailed sound and strong bass \n Hi-Res Audio. Hear every detail. Twinkling pianos. Blistering rock. Whatever you love, Hi-Res Audio headphones let you feel the full impact of every note. When wired to a Hi-Res source via the included 2.5 mm to 3.5 mm cable,, you'll get the full benefit of lossless audio that's recorded at a higher sample rate than CDs' for a brilliantly lifelike performance. \n Touch control. Swipe, tap, and press for easy control. Control volume by swiping up or down on the ear-housing touch control panel. You can activate or deactivate Active Noise Canceling with a single tap. Or engage Awareness Mode to hear more of the world around you while the music keeps playing. \n Built-in mic with echo cancellation for clear audio. No more of those annoying echoes when you are talking on the phone. With our acoustic echo cancellation, you always get a clear, undisturbed connection. \n Flat-folding and compact-folding design. Easy storage. These wireless headphones boast soft ear-cups that fold neatly in two configurations. You can fold them flat, perfect for storing in your office drawer or the included carrying pouch. Or you can fold them flat and inwards, creating a compact bundle that fits into coat pockets and bags.",
    },
    {
      name: "Sennheiser HD 350BT",
      category: "Headphones",
      image: "/images/p6.jpg",
      price: 110,
      countInStock: 3,
      brand: "Sennheiser",
      rating: 4.5,
      numReviews: 44,
      description:
        "Frequency response (Microphone)80 Hz to 6,000 Hz (-3 dB) \n THD, total harmonic distortion< 0.3 % (1 kHz, 100 dB) \n Transducer principleDynamic, closed \n Pick-up patternDual Beamforming \n Transducer principle (Microphone) MEMS \n Bluetooth Version 5.0 \n Frequency response18 Hz to 22,000 Hz (-10 dB) \n Modulation schemeGFSK, π/4 DQPSK, 8DPSK \n Battery SpecificationBuilt-in Lithium-Polymer rechargeable battery: 3.7 V ⎓, 300mAh \n Charging Current320 mA max. \n App supportEQ and updates via Sennheiser Smart Control \n Audio codecSBC, AAC, AptX™, AptX™ Low Latency \n Supported ProfilesHSP, HFP, AVRCP, A2DP \n Charging timeApprox. 2 hours \n Charging voltage5 V, DC \n Ear couplingAround Ear \n Operating time30 hours music playback via Bluetooth \n Sound pressure level (SPL)108 dB (1 kHz/0 dBFS) \n Transmission frequency2,402 MHz to 2,480 MHz \n WeightApprox. 238 g",
    },
    {
      name: "Lenovo Yoga",
      category: "Headphones",
      image: "/images/p7.jpg",
      price: 110,
      countInStock: 3,
      brand: "Lenovo",
      rating: 4.5,
      numReviews: 44,
      description:
        "1. Multi function \n \t Answer / Hang-up \n \t Play/Pause/Rewind/Forward \n 2. Power + Bluetooth® \n 3. Power LED Indicator \n 4. USB-C \n 5. Battery LED indicator \n 6. Volume + / - \n 7. ANC – Level 1 / 2 + Off \n 8. Microphone Mute",
    },
    {
      name: "Microsoft Surface",
      category: "Headphones",
      image: "/images/p8.jpg",
      price: 120,
      countInStock: 3,
      brand: "Microsoft",
      rating: 3.5,
      numReviews: 144,
      description:
        "Hear crisp, clear audio. Omnisonic Audio wraps you in your favorite music, shows, and more \n Lightweight, breathable, and a comfortable size you can wear for a full day of travel or at the office. Noise cancellation Up to 30 dB for active noise cancellation, Up to 40 dB for passive noise cancellation \n Your built in assistant can do it for you. Just ask Microsoft Cortana to play your favorite artist, set a reminder, make a call, get answers to questions, and more. Compatibility Windows 10, iOS, Android, MacOS \n Use your voice and simple, intuitive controls to adjust the volume, skip tracks, mute your mic, or hang up calls. Audio pauses when you take your headphones off , USB cord length 1.5 meter , Audio cable length 1.2 meter. Sound pressure level output - Up to 115 dB (1kHz, 1Vrms via cable connector with power on). Up to 115 dB (1kHz, 0dBFS over Bluetooth connection) \n Keep it quiet with active noise cancellation you can adjust with an easy on ear dial. Or, turn it all the way down to better hear conversations without removing headphones. Frequency response:20 20 kHz",
    },
    {
      name: "Lenovo ThinkPad X1",
      category: "Headphones",
      image: "/images/p9.jpg",
      price: 90,
      countInStock: 3,
      brand: "Lenovo",
      rating: 3.5,
      numReviews: 14,
      description:
        "1. Multi-function \n Answer / Hang-up + Play/Pause/Rewind/Forward \n 2. Power on / off + Bluetooth® \n 3. Power LED Indicator \n 4. USB-C Port \n 5. Battery LED indicator \n 6. Volume + / - \n 7. ANC – Levels 1 / 2 + off \n 8. Microphone mute",
    },
  ],
};

export default data;
