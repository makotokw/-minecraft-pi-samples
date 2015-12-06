import config
from mcpi.minecraft import Minecraft

mc = Minecraft.create(config.server_address)

mc.postToChat("Hello world")