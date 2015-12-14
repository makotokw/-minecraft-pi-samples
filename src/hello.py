import config
import platform
from mcpi.minecraft import Minecraft

mc = Minecraft.create(config.server_address)

mc.postToChat("Hello " + platform.platform())