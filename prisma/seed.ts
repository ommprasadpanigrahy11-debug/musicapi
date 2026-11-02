import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@wavelength.local" },
    update: {},
    create: { email: "admin@wavelength.local", passwordHash: "placeholder", displayName: "Admin", role: "ADMIN" },
  });
  const user = await prisma.user.upsert({
    where: { email: "user@wavelength.local" },
    update: {},
    create: { email: "user@wavelength.local", passwordHash: "placeholder", displayName: "Demo User", role: "USER" },
  });
  const premium = await prisma.user.upsert({
    where: { email: "premium@wavelength.local" },
    update: {},
    create: { email: "premium@wavelength.local", passwordHash: "placeholder", displayName: "Premium User", role: "PREMIUM" },
  });

  const artist = await prisma.artist.create({ data: { name: "Demo Artist", bio: "Royalty-free demo artist" } });
  const album = await prisma.album.create({ data: { title: "Demo Album", artistId: artist.id } });

  for (let i = 1; i <= 200; i++) {
    await prisma.track.create({
      data: {
        title: `Demo Track ${i}`,
        artistId: artist.id,
        albumId: album.id,
        durationSec: 120 + (i % 60),
        bitrate: 160,
        audioUrl: `https://example.com/audio/${i}.mp3`,
        license: "CC0",
        attribution: "Demo",
      },
    });
  }

  await prisma.playlist.create({
    data: { ownerId: user.id, title: "Demo Playlist", isPublic: true },
  });

  await prisma.trackRef.create({
    data: {
      provider: "jamendo",
      providerTrackId: "demo-1",
      title: "Demo Jamendo Track",
      artists: ["Demo Artist"],
      sourceUrl: "https://www.jamendo.com/track/demo-1",
      license: "CC-BY",
    },
  });

  console.info("seed complete", { admin: admin.id, user: user.id, premium: premium.id });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
